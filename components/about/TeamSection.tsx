import Image from "next/image";

const directors = [
  { name: "Jaseem Ammattikas", role: "Executive Director", image: "/about/jaseem.png" },
  { name: "Dr. Jafar Hamza", role: "Managing Director", image: "/about/jafar.png" },
  { name: "Dr. Amal Sidharth", role: "Managing Director", image: "/about/amal.png" },
  { name: "Dr. Fathima Nifla", role: "Director", image: "/about/fathima.png" },
];

const management = [
  { name: "SHAFIN BIN HARIF", role: "Head of operations", image: "/about/shafin.png" },
  { name: "Pradeesh MK", role: "Chief Financial Officer", image: "/about/pradeesh.png" },
  { name: "P.C Pushkaradas", role: "General Manager (Calicut)", image: "/about/p.c.png" },
  { name: "Shafeeque K", role: "General Manager (Kannur)", image: "/about/shafeeque.png" },
];

function DirectorCard({ person }: { person: (typeof directors)[number] }) {
  return <article className="w-[calc(50%_-_8px)] max-w-[238px] rounded-[16px] bg-white p-2 text-center shadow-[0_10px_25px_rgba(8,55,58,.18)] sm:w-[calc(25%_-_12px)]"><Image src={person.image} alt={person.name} width={332} height={286} className="aspect-[1.16] w-full rounded-[11px] object-cover" /><h3 className="mt-3 text-sm font-semibold text-[#29666b] lg:text-lg">{person.name}</h3><p className="mb-2 mt-1 text-[10px] text-[#617374] lg:text-sm">{person.role}</p></article>;
}

export default function TeamSection() {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl rounded-[24px] bg-dent-panel px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <h2 className="text-center text-2xl font-bold text-white lg:text-4xl">Meet Our Medical Directors</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-xs lg:text-base leading-5 text-white/90">Elite Dental Studio&apos;s four clinics are each led by a Medical Director with a postgraduate dental qualification, ensuring exceptional clinical expertise and patient care across every location.</p>
        <div className="mx-auto mt-9 flex max-w-5xl flex-wrap justify-center gap-4">{directors.map((person) => <DirectorCard key={person.name} person={person} />)}</div>
        <div className="my-10 border-t border-white/30" />
        <h2 className="text-center text-2xl font-bold text-white lg:text-4xl">Our Management Team</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-xs lg:text-base leading-5 text-white/90">Elite Dental Studio&apos;s management team ensures every patient interaction, from booking to billing, is handled with the same care the clinical team brings to treatment.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">{management.map((person) => <article key={person.name} className="w-[calc(50%_-_8px)] max-w-[220px] overflow-hidden rounded-[13px] bg-white text-center sm:w-[calc(33.333%_-_11px)] lg:w-[calc(20%_-_13px)]"><Image src={person.image} alt={person.name} width={277} height={239} className="aspect-[1.16] w-full object-cover" /><div className="bg-dent-panel px-2 py-3 text-white"><h3 className="text-[10px] font-extrabold lg:text-lg">{person.name}</h3><p className="mt-1 text-xs sm:text-sm">{person.role}</p></div></article>)}</div>
      </div>
    </section>
  );
}
