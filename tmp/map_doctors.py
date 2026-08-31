import json
import os
import re
import sys
import unicodedata
from difflib import SequenceMatcher


WP_NAMES = [
    "Dr. Amal", "Dr Amrita Sathianathan", "Dr Vidhu S", "Dr. Manu Mathew", "Dr Megha Mohan",
    "Dr. Alan Joseph", "Dr. Aswathi M", "Dr. Mohammed Ashmil", "Dr. Nafeesa Shaduly",
    "Dr. Theertha Raveendran", "Dr. Raihan Shanil", "Dr. Sidharth Manoj",
    "Dr. Vidhya Vijayan M.C", "Dr. Krishnapriya", "Dr. Ruby Rehman",
    "Dr. Fasil Pulparambil", "Dr. Sreenath N", "Dr. Sandhya Paul", "Dr. Henna Saeed",
    "Dr. Narmada Murali", "Dr.Shahin Ali T", "Dr. Sruthi MC", "Dr. Mevin George Varghese",
    "Dr. Jewel Jose", "Dr .Akhila Menon", "Dr. Theertha Dinesh", "Dr. Aswathi Balan",
    "Dr. Sreelakshmi viswanath", "Dr. Kiran CV", "Dr. Sruthi vijayan", "Dr. Appu mohan",
    "Dr. Fathima Naja", "Dr. Aswathy Babu", "Dr. Aysha Fidha", "Dr. Vipin Viswanath",
    "Dr Syam S", "Dr Sanjana Santhosh Menon", "Dr Arya Unnikrishnan", "Dr Gurmehr Baghiana",
    "Dr Ashni Ann Reju",
]


def norm(value):
    value = unicodedata.normalize("NFKD", value or "")
    value = value.replace("⁠", " ").replace("‌", " ").replace("‍", " ")
    if value.lower().endswith((".jpg", ".jpeg", ".png", ".pdf")):
        value = os.path.splitext(value)[0]
    value = re.sub(r"\b(dr|doctor|prof)\b", " ", value, flags=re.I)
    return " ".join(re.findall(r"[a-z0-9]+", value.lower()))


def score(a, b):
    na, nb = norm(a), norm(b)
    if not na or not nb:
        return 0
    if na == nb:
        return 1
    if na in nb or nb in na:
        return 0.92
    return SequenceMatcher(None, na, nb).ratio()


def best(value, choices):
    ranked = sorted(((score(value, item), item) for item in choices), reverse=True)
    return ranked[0] if ranked else (0, None)


def main(sheet_path, image_root):
    workbook = json.load(open(sheet_path, encoding="utf-8"))
    rows = workbook["Elite dental studio "]
    headers = rows[0]
    images = []
    for root, _, files in os.walk(image_root):
        for filename in files:
            if filename.lower().endswith((".jpg", ".jpeg", ".png", ".pdf")):
                location = os.path.basename(root).replace("EDS ", "").title()
                images.append({"location": location, "file": filename, "path": os.path.join(root, filename)})

    records = []
    for index, raw in enumerate(rows[1:], start=2):
        cells = raw + [""] * (len(headers) - len(raw))
        row = dict(zip(headers, cells))
        name = row[headers[0]].strip()
        location = row[headers[3]].strip().title()
        if not name:
            records.append({"row": index, "name": "", "location": location, "image": None, "image_score": 0, "wp": None, "wp_score": 0})
            continue
        same_location = [x["file"] for x in images if x["location"] == location]
        image_score, image_file = best(name, same_location)
        wp_score, wp_name = best(name, WP_NAMES)
        records.append({
            "row": index, "name": name, "location": location,
            "image": image_file if image_score >= 0.60 else None,
            "image_score": round(image_score, 3),
            "wp": wp_name if wp_score >= 0.72 else None,
            "wp_score": round(wp_score, 3),
        })

    print(json.dumps(records, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
