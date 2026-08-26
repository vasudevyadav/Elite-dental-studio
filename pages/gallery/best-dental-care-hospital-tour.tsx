import type { GetServerSideProps } from "next";

export default function HospitalTourRedirect() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: "/our-dental-office",
    permanent: true,
  },
});
