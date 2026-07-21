import Image from "next/image";

function AppointmentForm() {
  const field = "h-10 w-full rounded-[3px] border border-[#72a2a4] bg-[#f3faf9] px-4 text-[11px] text-[#4d6061] outline-none focus:border-[#25cdbc] focus:ring-2 focus:ring-[#25cdbc]/20 sm:h-11";

  return (
    <div className="rounded-[17px] bg-white p-5 shadow-[0_14px_35px_rgba(14,66,69,.2)] sm:p-8">
      <h2 className="text-center text-base font-extrabold italic text-[#286f73]">Book an Appointment</h2>
      <form className="mt-5 space-y-4" onSubmit={(event) => event.preventDefault()}>
        <input aria-label="Name" placeholder="Enter Your Name" className={field} />
        <input aria-label="Mobile number" placeholder="Enter Your Mobile No." type="tel" className={field} />
        <input aria-label="Email" placeholder="Enter Your Mail" type="email" className={field} />
        <input aria-label="Preferred date" placeholder="DD/MM/YYYY" className={field} />
        <select aria-label="Clinic" defaultValue="" className={`${field} appearance-none`}>
          <option value="" disabled>Select Clinic</option>
          <option>Calicut</option><option>Kochi</option><option>Kannur</option><option>Coimbatore</option>
        </select>
        <button className="mx-auto block w-40 rounded-[3px] bg-[#25cdbc] py-2.5 text-xs font-extrabold text-white transition hover:bg-[#216a6e]" type="submit">Book Now!</button>
      </form>
    </div>
  );
}

export default function AboutHero() {
  return (
    <section className="relative min-h-[430px] overflow-hidden bg-[#2c7477] sm:min-h-[560px] lg:min-h-[720px]">
      <Image src="/about/about-hero.png" alt="Elite Dental Studio reception" fill priority sizes="100vw" className="object-cover object-left" />
      <div className="relative mx-auto flex min-h-[430px] max-w-7xl items-center px-5 py-10 sm:min-h-[560px] sm:px-8 lg:min-h-[720px] lg:justify-end lg:px-12">
        <div className="hidden w-[43%] max-w-[480px] lg:block"><AppointmentForm /></div>
        <div className="mt-auto w-full pb-8 lg:hidden"><a href="#appointment" className="mx-auto block w-fit rounded-md bg-[#25cdbc] px-7 py-3 text-sm font-bold text-white shadow-lg">Book an Appointment</a></div>
      </div>
    </section>
  );
}
