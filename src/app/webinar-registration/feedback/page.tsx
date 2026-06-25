import WebinarFeedbackForm from "@/components/webinar/WebinarFeedbackForm";

export const metadata = {
  title: "Webinar Feedback | OBRF",
  description: "Validate your webinar registration and submit feedback.",
};

export default function WebinarFeedbackPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f8fafc_0%,_#ffffff_45%,_#eefbf8_100%)] px-4 py-12 text-slate-900">
      <WebinarFeedbackForm />
    </main>
  );
}
