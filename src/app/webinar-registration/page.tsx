import WebinarRegistrationForm from "@/components/webinar/WebinarRegistrationForm";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Webinar Registration | OBRF",
  description:
    "Register for the OBRF webinar on AI technologies in medical research and ICMR funding opportunities.",
};

const WebinarRegistrationPage = () => {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.18),_transparent_32%),linear-gradient(180deg,_#f0fdfa_0%,_#ffffff_45%,_#eff6ff_100%)] text-slate-900 dark:bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.15),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#0f172a_60%,_#020617_100%)] dark:text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-200/70 dark:border-slate-800">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-20 right-[-4rem] h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-[-4rem] h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
        </div>

        <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm backdrop-blur dark:border-teal-500/30 dark:bg-slate-900/60 dark:text-teal-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              OBRF Webinar Registration
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Innovative Approaches in Medical Research
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Register for the webinar on AI technologies and ICMR funding opportunities. Your details will be stored in the database and the OBRF admin team will receive an email notification automatically.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#registration-form"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                Start registration
              </Link>
              <Link
                href="/events-courses"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-teal-300 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-500 dark:hover:text-teal-300"
              >
                View event details
              </Link>
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-300">
                  Registration details
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-teal-200">
                      Audience
                    </p>
                    <p className="mt-2 text-sm font-semibold">
                      Medical professionals, researchers, academicians, and healthcare innovators
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-teal-200">
                      Delivery
                    </p>
                    <p className="mt-2 text-sm font-semibold">
                      Fully responsive registration flow with DB + email automation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="registration-form" className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-10">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-600 dark:text-teal-400">
              Complete registration
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Share your details once and we handle the rest
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              All required fields from the webinar brief are included, along with consent capture and interest tracking for future workshops.
            </p>
          </div>

          <WebinarRegistrationForm />
        </div>
      </section>
    </main>
  );
};

export default WebinarRegistrationPage;
