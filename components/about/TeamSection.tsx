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

function TeamCard({
  person,
  widthClassName,
}: {
  person: { name: string; role: string; image: string };
  widthClassName: string;
}) {
  return (
    <article
      className={`${widthClassName} rounded-[16px] bg-white p-2 text-center shadow-[0_10px_25px_rgba(8,55,58,.18)]`}
    >
      <Image
        src={person.image}
        alt={person.name}
        width={332}
        height={286}
        className="aspect-[1.16] w-full rounded-[11px] object-cover"
      />
      <h3 className="mt-3 text-sm font-semibold text-[#29666b] lg:text-lg">{person.name}</h3>
      <p className="mt-1 mb-2 text-[10px] text-[#617374] lg:text-sm">{person.role}</p>
    </article>
  );
}

export default function TeamSection() {
  return (
    <section className="">
      <div className="bg-dent-panel mx-auto max-w-7xl rounded-[24px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <h2 className="text-center text-2xl font-bold text-white lg:text-4xl">
          Meet Our Medical Directors
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-xs leading-5 text-white/90 lg:text-base">
          Elite Dental Studio&apos;s four clinics are each led by a Medical Director with a
          postgraduate dental qualification, ensuring exceptional clinical expertise and patient
          care across every location.
        </p>
        <div className="mx-auto mt-9 flex max-w-5xl flex-wrap justify-center gap-4">
          {directors.map((person) => (
            <TeamCard
              key={person.name}
              person={person}
              widthClassName="w-[calc(50%_-_8px)] max-w-[238px] sm:w-[calc(25%_-_12px)]"
            />
          ))}
        </div>
        <div className="my-10 border-t border-white/30" />
        <h2 className="text-center text-2xl font-bold text-white lg:text-4xl">
          Our Management Team
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-xs leading-5 text-white/90 lg:text-base">
          Elite Dental Studio&apos;s management team ensures every patient interaction, from booking
          to billing, is handled with the same care the clinical team brings to treatment.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {management.map((person) => (
            <TeamCard
              key={person.name}
              person={person}
              widthClassName="w-[calc(50%_-_8px)] max-w-[220px] sm:w-[calc(33.333%_-_11px)] lg:w-[calc(20%_-_13px)]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
