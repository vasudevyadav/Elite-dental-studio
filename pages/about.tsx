import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import BookAppointmentSection from "@/components/BookAppointmentSection";

const directors = [
  { name: "Joseem Ammatticos", role: "Executive Director", image: "/home/doctors/dr-manu.jpg" },
  { name: "Dr. Jafar Hameer", role: "Managing Director (Dental)", image: "/home/doctors/dr-amal.jpg" },
  { name: "Dr. Amal Sidharth", role: "Managing Director (Clinical)", image: "/home/doctors/dr-vidhu.jpg" },
  { name: "Dr. Fathima Nifa", role: "Director", image: "/home/doctors/dr-amrita.jpg" },
];

const management = [
  { name: "Shafin Bin Hameed", role: "Head of Operations", image: "/home/doctors/dr-manu.jpg" },
  { name: "Pradeesh MC", role: "Chief Finance Officer", image: "/home/doctors/dr-vidhu.jpg" },
  { name: "P C Pushkaradas", role: "General Manager", image: "/home/doctors/dr-amal.jpg" },
  { name: "Haseena TA", role: "General Manager", image: "/home/doctors/dr-amrita.jpg" },
  { name: "Shafeeque K", role: "Brand Manager", image: "/home/doctors/dr-megha.jpg" },
];

const stats = [
  ["75+", "Insurance covered"],
  ["2k", "Realized projects"],
  ["22k", "Happy customers"],
  ["20+", "Experienced doctors"],
];

const payments = ["VISA", "Mastercard", "Maestro", "AMEX", "G Pay", "PhonePe", "UPI", "Paytm", "PayPal", "Amazon Pay"];

function PersonCard({ person }: { person: (typeof directors)[number] }) {
  return (
    <article className="overflow-hidden rounded-[18px] bg-white p-2 text-center shadow-[0_10px_24px_rgba(7,61,64,.18)]">
      <div className="relative aspect-[4/4.2] overflow-hidden rounded-[13px] bg-[#e7f4f3]">
        <Image src={person.image} alt={person.name} fill sizes="(max-width: 640px) 42vw, 220px" className="object-cover object-top" />
      </div>
      <h3 className="mt-3 text-sm font-extrabold text-[#25696d] sm:text-base">{person.name}</h3>
      <p className="mb-2 mt-1 text-[10px] font-semibold uppercase tracking-wide text-[#798889]">{person.role}</p>
    </article>
  );
}

function CompactAppointmentForm() {
  const fieldClass = "h-11 w-full rounded-[4px] border border-[#79a9aa] bg-[#f3fbfa] px-4 text-xs outline-none focus:border-dent-accent focus:ring-4 focus:ring-dent-accent/15";
  return (
    <div className="rounded-[22px] bg-white p-6 shadow-[0_18px_55px_rgba(9,69,72,.2)] sm:p-8">
      <h2 className="text-center text-lg font-extrabold italic text-[#2c7477]">Book an Appointment</h2>
      <form className="mt-6 space-y-4" onSubmit={(event) => event.preventDefault()}>
        <input className={fieldClass} placeholder="Enter Your Name" aria-label="Name" />
        <input className={fieldClass} placeholder="Enter Your Mobile No." type="tel" aria-label="Mobile number" />
        <input className={fieldClass} placeholder="Enter Your Mail" type="email" aria-label="Email" />
        <input className={fieldClass} placeholder="DD/MM/YYYY" aria-label="Preferred date" />
        <select className={fieldClass} aria-label="Select clinic" defaultValue=""><option value="" disabled>Select Clinic</option><option>Calicut</option><option>Kochi</option><option>Kannur</option><option>Coimbatore</option></select>
        <button className="smooth-hover button-hover mx-auto block w-1/2 min-w-40 rounded-[4px] bg-dent-accent py-3 text-sm font-extrabold text-white hover:bg-dent-nav">Book Now!</button>
      </form>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Elite Dental Studio</title>
        <meta name="description" content="Learn about Elite Dental Studio, our mission, leadership and patient-first approach to advanced dental care." />
      </Head>
      <Navbar />
      <main className="bg-white">
        <section className="relative overflow-hidden bg-[#2c7477]">
          <div className="absolute inset-x-0 top-0 h-[560px] lg:h-[620px]">
            <Image src="/about-freepik-checkup.jpg" alt="Dentist caring for a patient" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#164f53]/30 via-transparent to-white/15" />
          </div>
          <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center justify-end px-5 py-10 sm:px-8 lg:min-h-[620px] lg:px-12">
            <div className="w-full lg:w-[44%]"><CompactAppointmentForm /></div>
          </div>
          <div className="pointer-events-none absolute -bottom-1 left-[-5%] h-20 w-[110%] -rotate-2 bg-[#2c7477] ring-[8px] ring-dent-accent" />
        </section>

        <section id="our-story" className="bg-[#2c7477] pb-16 pt-14 text-white lg:pb-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="relative rounded-[22px] bg-[#f4fbfa] p-6 text-[#4f6062] shadow-[0_8px_28px_rgba(4,49,52,.3)] sm:p-9 lg:pr-[34%]">
              <h1 className="text-2xl font-black uppercase text-[#286f73] sm:text-3xl">About our dental office</h1>
              <p className="mt-5 leading-7">Elite Dental Studio is a distinctive dental clinic that keeps up with time and technology in treating dental ailments. Care and compassion are the two buzzwords that typify treatment at Elite Dental Studio.</p>
              <p className="mt-4 leading-7">Our patients are at the heart of our practice. We provide comfortable treatment areas and welcoming lounges with the best modern amenities.</p>
              <p className="mt-5 font-bold italic text-[#3c5557]">From the first conversation with our team to enjoying your new smile, we make you feel part of our family.</p>
              <div className="mt-7 overflow-hidden rounded-[18px] shadow-xl lg:absolute lg:-right-2 lg:-top-14 lg:mt-0 lg:w-[31%]">
                <Image src="/about-freepik-consultation.jpg" alt="A dentist consulting with a patient" width={620} height={620} className="aspect-[4/5] w-full object-cover" />
              </div>
            </div>
            <div className="mt-10 grid items-center gap-8 lg:grid-cols-[.38fr_.62fr]">
              <div className="overflow-hidden rounded-[15px]"><Image src="/home/about-us-img.png" alt="Modern dental treatment room" width={620} height={360} className="aspect-[2/1] w-full object-cover" /></div>
              <ul className="grid gap-3 text-sm font-semibold italic sm:text-base">
                {["Accurately assess your dental condition", "Educate you about tooth replacement and other options", "Care for your overall well-being", "Provide safety, comfort and security in a warm environment", "Help you afford the treatment you want and deserve", "Provide supportive hygiene care following treatment"].map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-12">
            <div className="overflow-hidden rounded-[26px] border-4 border-white shadow-[0_14px_40px_rgba(24,75,78,.18)]">
              <Image src="/about-freepik-consultation.jpg" alt="Dentist explaining insurance and payment options" width={760} height={660} className="aspect-[5/4] w-full object-cover" />
            </div>
            <div>
              <h2 className="mt-3 text-3xl font-black text-[#286f73] sm:text-4xl">Insurance and payment</h2>
              <p className="mt-5 max-w-xl leading-7 text-[#59696a]">We accept leading cashless insurance cards and make quality care easier with flexible payment methods. Our team will guide you through claims and payment options before treatment.</p>
              <div className="mt-8 grid grid-cols-2 gap-3 rounded-[20px] bg-[#eef9f7] p-4 sm:grid-cols-5">
                {payments.map((payment, index) => <div key={payment} className={`flex h-16 items-center justify-center rounded-xl px-3 text-center text-sm font-black text-white shadow-sm ${index % 3 === 0 ? "bg-[#1551a2]" : index % 3 === 1 ? "bg-[#2c7477]" : "bg-[#25bfae]"}`}>{payment}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-24">
          <div className="overflow-hidden rounded-[30px] bg-[#e9f7f6] lg:grid lg:grid-cols-2">
            <div className="p-7 sm:p-12 lg:p-16">
              <p className="text-sm font-extrabold uppercase tracking-[.14em] text-dent-accent">Our mission</p>
              <h2 className="mt-3 text-3xl font-black text-[#286f73] sm:text-4xl">Care that creates lasting confidence</h2>
              <p className="mt-5 leading-7 text-[#536567]">Our mission is to change how people experience dentistry—through honest guidance, responsible treatment and a calm environment where patients feel heard.</p>
              <p className="mt-4 leading-7 text-[#536567]">We continually invest in advanced techniques and the growth of our clinical team to deliver predictable, comfortable outcomes.</p>
            </div>
            <div className="relative min-h-[430px]">
              <Image src="/about-freepik-treatment.jpg" alt="Modern dental care" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-[#174f53]/30" />
              <div className="relative grid h-full grid-cols-2 gap-4 p-6 sm:p-10 lg:content-center">
                {stats.map(([number, label], index) => <div key={label} className={`rounded-2xl border border-white/40 p-5 text-white backdrop-blur-sm ${index % 2 ? "bg-[#246a70]/85" : "bg-[#25cdbc]/90"}`}><strong className="block text-3xl font-black sm:text-4xl">{number}</strong><span className="mt-2 block text-sm font-bold">{label}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:px-12 lg:pb-24">
          <div className="rounded-[30px] bg-[#2c7477] px-5 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div className="text-center text-white"><p className="text-sm font-bold uppercase tracking-[.15em] text-[#39dfcd]">The people behind your care</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Meet Our Directors</h2></div>
            <div className="mx-auto mt-9 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">{directors.map((person) => <PersonCard key={person.name} person={person} />)}</div>
            <div className="my-12 border-t border-white/25" />
            <h2 className="text-center text-2xl font-black text-white sm:text-3xl">Our Management Team</h2>
            <div className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">{management.map((person) => <PersonCard key={person.name} person={person} />)}</div>
          </div>
        </section>

        <FAQSection />
        <BookAppointmentSection />
        <p className="mx-auto max-w-7xl px-5 pb-8 text-center text-xs text-[#6d7c7d] sm:px-8 lg:px-12">
          Dental care photography by{" "}
          <a href="https://www.freepik.com/free-photo/dentist-performing-check-up-patient-office_6090392.htm" target="_blank" rel="noreferrer" className="font-bold text-[#287479] underline underline-offset-2">Freepik</a>
        </p>
      </main>
      <Footer />
    </>
  );
}
