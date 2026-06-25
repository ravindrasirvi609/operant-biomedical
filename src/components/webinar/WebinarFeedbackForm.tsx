"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

type FeedbackState = {
  email: string;
  fullName: string;
  overallSatisfaction: string;
  contentRelevance: string;
  speakerEffectiveness: string;
  technicalExperience: string;
  keyTakeaway: string;
  suggestions: string;
  consentToContact: boolean;
};

const ratingOptions = [
  "Excellent",
  "Very Good",
  "Good",
  "Average",
  "Needs Improvement",
];

export default function WebinarFeedbackForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);
  const [registeredParticipant, setRegisteredParticipant] = useState<{
    fullName: string;
    email: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FeedbackState>({
    email: "",
    fullName: "",
    overallSatisfaction: "",
    contentRelevance: "",
    speakerEffectiveness: "",
    technicalExperience: "",
    keyTakeaway: "",
    suggestions: "",
    consentToContact: false,
  });

  const handleEmailCheck = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get("/api/webinar-feedback", {
        params: { email },
      });

      if (!response.data?.registered) {
        setError("This email is not registered for the webinar.");
        setEmailChecked(false);
        setRegisteredParticipant(null);
        return;
      }

      if (response.data?.exists) {
        await Swal.fire({
          title: "Feedback already submitted",
          text: "We found an existing registration and feedback record. Redirecting to your certificate page.",
          icon: "info",
          confirmButtonColor: "#0f766e",
        });
        router.push(
          `/webinar-registration/certificate?email=${encodeURIComponent(email)}`
        );
        return;
      }

      setRegisteredParticipant(response.data.registration);
      setForm((current) => ({
        ...current,
        email: response.data.registration.email,
        fullName: response.data.registration.fullName,
      }));
      setEmailChecked(true);
    } catch (err: any) {
      setError(err?.response?.data?.error || "Unable to validate the email.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitFeedback = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await axios.post("/api/webinar-feedback", form);
      await Swal.fire({
        title: "Feedback submitted",
        text: "Thank you for sharing your feedback.",
        icon: "success",
        confirmButtonColor: "#0f766e",
      });
      router.push(
        `/webinar-registration/certificate?email=${encodeURIComponent(form.email)}`
      );
    } catch (err: any) {
      setError(err?.response?.data?.error || "We could not submit your feedback.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10";

  return (
    <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-10">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-600">
          Webinar Feedback
        </p>
        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
          Check your email to continue
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-600">
          If your email is already registered, we will take you directly to the
          certificate page. Otherwise, you can complete the feedback form here.
        </p>
      </div>

      {error ? (
        <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-rose-700">
          {error}
        </div>
      ) : null}

      {!emailChecked ? (
        <div className="space-y-5">
          <label className="block text-sm font-semibold">Registered email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="Enter the email used during webinar registration"
          />
          <button
            type="button"
            onClick={handleEmailCheck}
            disabled={loading}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-700 to-emerald-600 px-6 py-4 text-base font-bold text-white transition hover:from-teal-600 hover:to-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Validating..." : "Continue"}
          </button>
        </div>
      ) : (
        <form onSubmit={submitFeedback} className="space-y-6">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold">Full name *</label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className={inputClass}
                required
                readOnly
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Email *</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                required
                readOnly
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <RatingField
              label="Overall satisfaction *"
              name="overallSatisfaction"
              value={form.overallSatisfaction}
              onChange={handleChange}
              inputClass={inputClass}
            />
            <RatingField
              label="Content relevance *"
              name="contentRelevance"
              value={form.contentRelevance}
              onChange={handleChange}
              inputClass={inputClass}
            />
            <RatingField
              label="Speaker effectiveness *"
              name="speakerEffectiveness"
              value={form.speakerEffectiveness}
              onChange={handleChange}
              inputClass={inputClass}
            />
            <RatingField
              label="Technical experience *"
              name="technicalExperience"
              value={form.technicalExperience}
              onChange={handleChange}
              inputClass={inputClass}
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Key takeaway *</label>
            <textarea
              name="keyTakeaway"
              value={form.keyTakeaway}
              onChange={handleChange}
              className={inputClass}
              rows={4}
              required
              placeholder="What was the most valuable insight you gained?"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Suggestions</label>
            <textarea
              name="suggestions"
              value={form.suggestions}
              onChange={handleChange}
              className={inputClass}
              rows={4}
              placeholder="Tell us how we can improve future webinars"
            />
          </div>

          <label className="flex gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              name="consentToContact"
              checked={form.consentToContact}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
            />
            <span>
              I consent to be contacted regarding future OBRF webinars and
              related academic activities. *
            </span>
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-teal-700 to-emerald-600 px-6 py-4 text-base font-bold text-white transition hover:from-teal-600 hover:to-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Submitting feedback..." : "Submit feedback"}
          </button>
        </form>
      )}

      {registeredParticipant ? (
        <p className="mt-6 text-sm text-slate-600">
          Registered participant: <strong>{registeredParticipant.fullName}</strong>
        </p>
      ) : null}
    </div>
  );
}

function RatingField({
  label,
  name,
  value,
  onChange,
  inputClass,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  inputClass: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <select name={name} value={value} onChange={onChange} className={inputClass} required>
        <option value="">Select one</option>
        {ratingOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
