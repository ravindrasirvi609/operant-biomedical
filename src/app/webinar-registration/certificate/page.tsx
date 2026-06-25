import WebinarCertificateClient from "@/components/webinar/WebinarCertificateClient";

export const metadata = {
  title: "Webinar Certificate | OBRF",
  description: "Download your OBRF webinar participation certificate.",
};

export default function WebinarCertificatePage({
  searchParams,
}: {
  searchParams?: { email?: string };
}) {
  return <WebinarCertificateClient email={searchParams?.email ?? ""} />;
}
