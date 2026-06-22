import React from "react";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaGlobeAsia,
  FaLightbulb,
  FaRegFileAlt,
  FaRegHandshake,
  FaUsers,
} from "react-icons/fa";

const event = {
  label: "Upcoming Webinar",
  title:
    "Innovative Approaches in Medical Research: Leveraging AI Technologies and ICMR Funding Opportunities",
  organizer: "Operant Biomedical Research Federation (OBRF)",
  description:
    "A focused webinar for medical professionals, clinicians, researchers, academicians, postgraduate students, and healthcare innovators exploring how AI is changing medical research and where ICMR funding can support the next step.",
  mode: "Online MS Teams",
  date: "25 June 2025",
  time: "03:30 PM IST",
  audience:
    "Medical professionals, clinicians, researchers, academicians, postgraduate students, and healthcare innovators",
  ctaPrimary: "#register",
  registrationLink: "/webinar-registration",
  ctaSecondary: "#overview",
};

const highlights = [
  {
    title: "AI in Research",
    text: "Understand how artificial intelligence supports predictive analytics, precision medicine, drug discovery, and trial optimization.",
    icon: <FaLightbulb className="text-amber-500" />,
  },
  {
    title: "ICMR Funding",
    text: "Learn about ICMR schemes, eligibility criteria, and how to shape proposals that align with national healthcare priorities.",
    icon: <FaRegFileAlt className="text-sky-500" />,
  },
  {
    title: "Practical Outcomes",
    text: "Leave with a clearer path for proposal development, translational research, and industry-academia collaboration.",
    icon: <FaRegHandshake className="text-emerald-500" />,
  },
];

const objectives = [
  "Explore the role of AI in medical and clinical research.",
  "Understand AI applications in diagnostics, precision medicine, epidemiological studies, drug discovery, and clinical trials.",
  "Discuss ethical, regulatory, and implementation challenges in AI-driven healthcare research.",
  "Gain insight into ICMR research grants, extramural funding programs, and priority research areas.",
  "Learn practical approaches for developing high-quality research proposals.",
  "Identify emerging opportunities at the intersection of AI, medical research, and healthcare innovation.",
];

const webinarNotes = [
  "The session is designed to help participants translate ideas into practical research pathways.",
  "E-certificates can be issued for registered participants who attend and complete the feedback form.",
  "The webinar is intended to be a launchpad for future workshops on grant writing and AI applications in healthcare research.",
];

const speakers = [
  {
    role: "Keynote Speaker",
    name: "Dr Taruna Madan Gupta",
    designation: "Scientist G & Head",
    department: "Development Research, ICMR, New Delhi",
    image: "/drtarunamadan.jpg",
  },
  {
    role: "Moderator",
    name: "Dr Neelam Bajaj",
    designation: "Associate Professor",
    department: "Dept. of Dentistry, AIIMS Nagpur",
    image: "/drneelam.webp",
  },
];

const EventsCoursesPage = () => {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_35%),linear-gradient(180deg,_#f8fbff_0%,_#ffffff_45%,_#f5f7ff_100%)] text-slate-900 dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_30%),linear-gradient(180deg,_#020617_0%,_#0f172a_55%,_#020617_100%)] dark:text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-200/70 dark:border-slate-800">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-24 right-[-5rem] h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-[-4rem] h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
        </div>

        <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-24">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur dark:border-sky-500/30 dark:bg-slate-900/60 dark:text-sky-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {event.label}
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {event.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {event.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { icon: <FaCalendarAlt />, label: "Date", value: event.date },
                { icon: <FaClock />, label: "Time", value: event.time },
                { icon: <FaGlobeAsia />, label: "Mode", value: event.mode },
                {
                  icon: <FaUsers />,
                  label: "Audience",
                  value: "Healthcare research community",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600/10 text-sky-700 dark:text-sky-300">
                    {item.icon}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={event.registrationLink}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                Register now
              </Link>
              <Link
                href={event.ctaSecondary}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
              >
                Explore details
              </Link>
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 p-6 text-white">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
                      OBRF Webinar
                    </p>
                    <h2 className="mt-2 text-2xl font-black">
                      Research. Learn. Apply.
                    </h2>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/10">
                    <img
                      src="/assets/img/OBRF Logo.png"
                      alt="OBRF logo"
                      className="h-16 w-16 rounded-xl object-contain bg-white"
                    />
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-sky-200">
                      Organizer
                    </p>
                    <p className="mt-2 text-sm font-semibold">
                      {event.organizer}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-sky-200">
                      Format
                    </p>
                    <p className="mt-2 text-sm font-semibold">
                      Live learning session with practical takeaways
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-sky-200">
                    What participants get
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-100/90">
                    A structured overview of AI in medical research, funding
                    opportunities through ICMR, and a stronger framework for
                    building research proposals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="container mx-auto px-4 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
            Event overview
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Clear structure, deeper value, and a better registration journey
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            This page is laid out to help visitors quickly understand what the
            webinar is about, why it matters, and what they will gain from
            attending.
          </p>
        </div>

        <div className="mb-10">
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-600/10 text-sky-700 dark:text-sky-300">
              <FaUsers />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-400">
                Speakers
              </p>
              <h3 className="text-2xl font-black">Meet the keynote speaker and moderator</h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {speakers.map((speaker) => (
              <article
                key={speaker.role}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="grid gap-0 sm:grid-cols-[160px_1fr]">
                  <div className="relative min-h-[220px] bg-slate-100 dark:bg-slate-800">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400">
                      {speaker.role}
                    </p>
                    <h4 className="mt-3 text-2xl font-black">{speaker.name}</h4>
                    <p className="mt-3 text-base font-semibold text-slate-700 dark:text-slate-200">
                      {speaker.designation}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {speaker.department}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-2xl dark:bg-slate-800">
                {item.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-600/10 text-sky-700 dark:text-sky-300">
                <FaCheckCircle />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-400">
                  Key learning objectives
                </p>
                <h3 className="text-2xl font-black">What attendees will take away</h3>
              </div>
            </div>

            <ul className="mt-6 space-y-4">
              {objectives.map((objective) => (
                <li
                  key={objective}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60"
                >
                  <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-300">
                    <FaCheckCircle className="text-sm" />
                  </span>
                  <span className="leading-7 text-slate-700 dark:text-slate-200">
                    {objective}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-sky-50 to-indigo-50 p-8 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                <FaUsers />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-600 dark:text-slate-400">
                  Ideal audience
                </p>
                <h3 className="text-2xl font-black">Who should attend</h3>
              </div>
            </div>

            <p className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-200">
              {event.audience}
            </p>

            <div className="mt-8 rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-black/5 dark:bg-slate-900/80 dark:ring-white/10">
              <h4 className="text-lg font-bold">Why it is useful</h4>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                The webinar connects research innovation with practical funding
                guidance, helping participants move from ideas to executable
                projects with more confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-2xl font-black">Important notes</h3>
            <div className="mt-6 space-y-4">
              {webinarNotes.map((note) => (
                <div
                  key={note}
                  className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/60"
                >
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-600/10 text-sky-700 dark:text-sky-300">
                    <FaCheckCircle className="text-sm" />
                  </span>
                  <p className="leading-7 text-slate-600 dark:text-slate-300">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            id="register"
            className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl dark:border-slate-800"
          >
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-300">
              Registration
            </p>
            <h3 className="mt-3 text-3xl font-black">
              Ready to add this to the upcoming events section?
            </h3>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              If you want, I can also turn this into a reusable event card or
              connect the register button to your actual form or WhatsApp flow.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#overview"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-200"
              >
                Review details
              </Link>
              <Link
                href="/webinar-registration"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Add registration link
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventsCoursesPage;
