import json
import sys
import zipfile
import xml.etree.ElementTree as ET


NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
REL_NS = {"r": "http://schemas.openxmlformats.org/package/2006/relationships"}
DOC_REL = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"


def col_index(ref: str) -> int:
    letters = "".join(ch for ch in ref if ch.isalpha())
    value = 0
    for ch in letters:
        value = value * 26 + ord(ch.upper()) - 64
    return value - 1


def main(path: str, output_path=None) -> None:
    with zipfile.ZipFile(path) as archive:
        shared = []
        if "xl/sharedStrings.xml" in archive.namelist():
            root = ET.fromstring(archive.read("xl/sharedStrings.xml"))
            for item in root.findall("m:si", NS):
                shared.append("".join(node.text or "" for node in item.iterfind(".//m:t", NS)))

        workbook = ET.fromstring(archive.read("xl/workbook.xml"))
        rels = ET.fromstring(archive.read("xl/_rels/workbook.xml.rels"))
        targets = {rel.attrib["Id"]: rel.attrib["Target"] for rel in rels.findall("r:Relationship", REL_NS)}

        output = {}
        for sheet in workbook.findall("m:sheets/m:sheet", NS):
            name = sheet.attrib["name"]
            target = targets[sheet.attrib[DOC_REL]].lstrip("/")
            if not target.startswith("xl/"):
                target = "xl/" + target
            root = ET.fromstring(archive.read(target))
            rows = []
            for row in root.findall(".//m:sheetData/m:row", NS):
                values = []
                for cell in row.findall("m:c", NS):
                    index = col_index(cell.attrib.get("r", "A1"))
                    while len(values) <= index:
                        values.append("")
                    cell_type = cell.attrib.get("t")
                    if cell_type == "inlineStr":
                        value = "".join(node.text or "" for node in cell.iterfind(".//m:t", NS))
                    else:
                        raw = cell.findtext("m:v", default="", namespaces=NS)
                        value = shared[int(raw)] if cell_type == "s" and raw else raw
                    values[index] = value
                while values and values[-1] == "":
                    values.pop()
                rows.append(values)
            output[name] = rows
        payload = json.dumps(output, ensure_ascii=False, indent=2)
        if output_path:
            with open(output_path, "w", encoding="utf-8") as handle:
                handle.write(payload)
        else:
            print(payload)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else None)
