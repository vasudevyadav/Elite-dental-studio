import { getDoctorIdentity } from "@/lib/doctors";

export default function DoctorCredentials({
  identity,
  className = "",
}: {
  identity: ReturnType<typeof getDoctorIdentity>;
  className?: string;
}) {
  return (
    <div className={`mt-3 space-y-2 ${className}`}>
      {identity.role && <p className="font-semibold tracking-wide uppercase">{identity.role}</p>}
      {identity.specialty && <p className="font-medium uppercase">{identity.specialty}</p>}
      <p className="leading-relaxed">{identity.qualification}</p>
    </div>
  );
}
