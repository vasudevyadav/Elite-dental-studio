import Image from "next/image";

const directors = [
  { name: "Jaseem Ammattikas", role: "Executive Director", image: "/about/jaseem.png" },
  { name: "Dr. Jafar Hamza", role: "Managing Director (Kochi)", image: "/about/jafar.png" },
  { name: "Dr. Amal Sidharth", role: "Managing Director (Calicut)", image: "/about/amal.png" },
  { name: "Dr. Fathima Nifla", role: "Director", image: "/about/fathima.png" },
];

const management = [
  { name: "SHAFIN BIN HARIF", role: "Head of operations", image: "/about/shafin.png" },
  { name: "Pradeesh MK", role: "Chief Financial Officer", image: "/about/pradeesh.png" },
  { name: "P.C Pushkaradas", role: "General Manager (Calicut)", image: "/about/p.c.png" },
  { name: "Haseena TA", role: "General Manager (Kochi)", image: "/about/haseena.png" },
  { name: "Shafeeque K", role: "General Manager (Kannur)", image: "/about/shafeeque.png" },
];

function DirectorCard({ person }: { person: (typeof directors)[number] }) {
  return <article className="rounded-[16px] bg-white p-2 text-center shadow-[0_10px_25px_rgba(8,55,58,.18)]"><Image src={person.image} alt={person.name} width={332} height={286} className="aspect-[1.16] w-full rounded-[11px] object-cover" /><h3 className="mt-3 text-sm font-bold text-[#29666b] sm:text-base">{person.name}</h3><p className="mb-2 mt-1 text-[9px] text-[#617374] sm:text-[10px]">{person.role}</p></article>;
}

export default function TeamSection() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1120px] rounded-[24px] bg-dent-panel px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <h2 className="text-center text-2xl font-black text-white sm:text-3xl">Meet Our Directors</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-xs leading-5 text-white/90">Our leadership combines clinical experience, thoughtful management and a shared commitment to exceptional patient care.</p>
        <div className="mx-auto mt-9 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">{directors.map((person) => <DirectorCard key={person.name} person={person} />)}</div>
        <div className="my-10 border-t border-white/30" />
        <h2 className="text-center text-2xl font-black text-white sm:text-3xl">Our Management Team</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-xs leading-5 text-white/90">Meet the people who keep every clinic experience welcoming, organised and focused on your care.</p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">{management.map((person) => <article key={person.name} className="overflow-hidden rounded-[13px] bg-white text-center"><Image src={person.image} alt={person.name} width={277} height={239} className="aspect-[1.16] w-full object-cover" /><div className="bg-dent-panel px-2 py-3 text-white"><h3 className="text-[10px] font-extrabold sm:text-xs">{person.name}</h3><p className="mt-1 text-[7px] sm:text-[8px]">{person.role}</p></div></article>)}</div>
      </div>
    </section>
  );
}
