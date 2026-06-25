"use client";

import axios from "axios";
import React, { useMemo, useState } from "react";
import Swal from "sweetalert2";

type FormState = {
  fullName: string;
  gender: string;
  email: string;
  mobileNumber: string;
  country: string;
  stateProvince: string;
  city: string;
  professionalCategory: string;
  otherProfessionalCategory: string;
  designation: string;
  departmentSpecialization: string;
  organizationName: string;
  organizationType: string;
  otherOrganizationType: string;
  yearsExperience: string;
  objectives: string[];
  otherObjective: string;
  futureWorkshopsInterest: string;
  consentCommunications: boolean;
  informationAccurate: boolean;
};

type WebinarRegistrationFormProps = {
  isClosed?: boolean;
};

const objectiveOptions = [
  "Understanding AI applications in medical research",
  "Learning about ICMR funding opportunities",
  "Proposal writing guidance",
  "Networking with experts",
  "Identifying collaborative opportunities",
  "Skill enhancement",
  "Career development",
];

const WebinarRegistrationForm = ({ isClosed = false }: WebinarRegistrationFormProps) => {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    gender: "",
    email: "",
    mobileNumber: "",
    country: "",
    stateProvince: "",
    city: "",
    professionalCategory: "",
    otherProfessionalCategory: "",
    designation: "",
    departmentSpecialization: "",
    organizationName: "",
    organizationType: "",
    otherOrganizationType: "",
    yearsExperience: "",
    objectives: [],
    otherObjective: "",
    futureWorkshopsInterest: "",
    consentCommunications: false,
    informationAccurate: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedObjectives = useMemo(() => form.objectives, [form.objectives]);

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

  const toggleObjective = (objective: string) => {
    setForm((current) => {
      const exists = current.objectives.includes(objective);
      return {
        ...current,
        objectives: exists
          ? current.objectives.filter((item) => item !== objective)
          : [...current.objectives, objective],
      };
    });
  };

  const resetForm = () =>
    setForm({
      fullName: "",
      gender: "",
      email: "",
      mobileNumber: "",
      country: "",
      stateProvince: "",
      city: "",
      professionalCategory: "",
      otherProfessionalCategory: "",
      designation: "",
      departmentSpecialization: "",
      organizationName: "",
      organizationType: "",
      otherOrganizationType: "",
      yearsExperience: "",
      objectives: [],
      otherObjective: "",
      futureWorkshopsInterest: "",
      consentCommunications: false,
      informationAccurate: false,
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isClosed) {
      await Swal.fire({
        title: "Registration closed",
        text: "This webinar registration is no longer accepting submissions.",
        icon: "info",
        confirmButtonColor: "#0f766e",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post("/api/webinar-registration", form);
      await Swal.fire({
        title: "Registration successful",
        html: `
          <p>Your webinar registration has been submitted successfully.</p>
          <p style="margin-top: 10px;">A confirmation email has been sent to your registered email address.</p>
          <p style="margin-top: 10px;">Please join the WhatsApp group for more events, news, and information.</p>
          <a href="https://chat.whatsapp.com/I4rPdgTTAwQ3xZx7fzUINP" target="_blank" rel="noreferrer" style="display:inline-block;margin-top:16px;padding:12px 20px;border-radius:999px;background:#16a34a;color:#fff;text-decoration:none;font-weight:700;">Join WhatsApp group</a>
        `,
        icon: "success",
        confirmButtonColor: "#0f766e",
      });
      resetForm();
    } catch (error: any) {
      const message =
        error?.response?.data?.error ||
        "We could not submit your registration. Please try again.";
      await Swal.fire({
        title: "Registration failed",
        text: message,
        icon: "error",
        confirmButtonColor: "#0f766e",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-slate-800 dark:bg-slate-950 dark:text-white";

  const sectionLabel =
    "text-xs font-bold uppercase tracking-[0.24em] text-teal-600 dark:text-teal-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {isClosed && (
        <div className="rounded-[1.75rem] border border-amber-200 bg-amber-50 p-5 text-amber-950 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-50">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">
            Registration closed
          </p>
          <p className="mt-2 leading-7">
            We are no longer accepting webinar registrations. Please check back
            for future events or join the WhatsApp group for updates.
          </p>
        </div>
      )}
      <section className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="text-sm font-semibold">Full name *</label>
          <input disabled={isClosed} name="fullName" value={form.fullName} onChange={handleChange} className={inputClass} required placeholder="Full name as you want it on the certificate" />
        </div>
        <div>
          <label className="text-sm font-semibold">Gender *</label>
          <select disabled={isClosed} name="gender" value={form.gender} onChange={handleChange} className={inputClass} required>
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Prefer not to say">Prefer not to say</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold">Email address *</label>
          <input disabled={isClosed} type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} required placeholder="name@domain.com" />
        </div>
        <div>
          <label className="text-sm font-semibold">Mobile number *</label>
          <input disabled={isClosed} name="mobileNumber" value={form.mobileNumber} onChange={handleChange} className={inputClass} required placeholder="WhatsApp preferred" />
        </div>
        <div>
          <label className="text-sm font-semibold">Country *</label>
          <input disabled={isClosed} name="country" value={form.country} onChange={handleChange} className={inputClass} required />
        </div>
        <div>
          <label className="text-sm font-semibold">State / Province *</label>
          <input disabled={isClosed} name="stateProvince" value={form.stateProvince} onChange={handleChange} className={inputClass} required />
        </div>
        <div>
          <label className="text-sm font-semibold">City *</label>
          <input disabled={isClosed} name="city" value={form.city} onChange={handleChange} className={inputClass} required />
        </div>
      </section>

      <section className="space-y-5">
        <p className={sectionLabel}>Professional Information</p>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold">Professional category *</label>
            <select disabled={isClosed} name="professionalCategory" value={form.professionalCategory} onChange={handleChange} className={inputClass} required>
              <option value="">Select category</option>
              <option value="Medical Practitioner/Clinician">Medical Practitioner/Clinician</option>
              <option value="Faculty Member">Faculty Member</option>
              <option value="Medical Researcher">Medical Researcher</option>
              <option value="Resident Doctor">Resident Doctor</option>
              <option value="Postgraduate Student">Postgraduate Student</option>
              <option value="PhD Scholar">PhD Scholar</option>
              <option value="Healthcare Professional">Healthcare Professional</option>
              <option value="Hospital Administrator">Hospital Administrator</option>
              <option value="Pharmaceutical Industry Professional">Pharmaceutical Industry Professional</option>
              <option value="Clinical Research Professional">Clinical Research Professional</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold">Current designation *</label>
            <input disabled={isClosed} name="designation" value={form.designation} onChange={handleChange} className={inputClass} required />
          </div>
          {form.professionalCategory === "Other" && (
            <div className="md:col-span-2">
              <label className="text-sm font-semibold">Other professional category</label>
              <input disabled={isClosed} name="otherProfessionalCategory" value={form.otherProfessionalCategory} onChange={handleChange} className={inputClass} />
            </div>
          )}
          <div className="md:col-span-2">
            <label className="text-sm font-semibold">Department / specialization *</label>
            <input disabled={isClosed} name="departmentSpecialization" value={form.departmentSpecialization} onChange={handleChange} className={inputClass} required />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-semibold">Institution / hospital / organization name *</label>
            <input disabled={isClosed} name="organizationName" value={form.organizationName} onChange={handleChange} className={inputClass} required />
          </div>
          <div>
            <label className="text-sm font-semibold">Type of organization *</label>
            <select disabled={isClosed} name="organizationType" value={form.organizationType} onChange={handleChange} className={inputClass} required>
              <option value="">Select organization type</option>
              <option value="State Government Medical College / Hospital">State Government Medical College / Hospital</option>
              <option value="Private Medical College / Hospital">Private Medical College / Hospital</option>
              <option value="Central Govt Medical College / Hospital">Central Govt Medical College / Hospital</option>
              <option value="Research Institute">Research Institute</option>
              <option value="Pharmaceutical Industry">Pharmaceutical Industry</option>
              <option value="CRO">CRO</option>
              <option value="Academic Institution">Academic Institution</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold">Total years of experience *</label>
            <select disabled={isClosed} name="yearsExperience" value={form.yearsExperience} onChange={handleChange} className={inputClass} required>
              <option value="">Select experience</option>
              <option value="< 2 Years">&lt; 2 Years</option>
              <option value="2–5 Years">2-5 Years</option>
              <option value="6–10 Years">6-10 Years</option>
              <option value="11–15 Years">11-15 Years</option>
              <option value=">15 Years">&gt;15 Years</option>
            </select>
          </div>
          {form.organizationType === "Other" && (
            <div className="md:col-span-2">
              <label className="text-sm font-semibold">Other organization type</label>
              <input disabled={isClosed} name="otherOrganizationType" value={form.otherOrganizationType} onChange={handleChange} className={inputClass} />
            </div>
          )}
        </div>
      </section>

      <section className="space-y-5">
        <p className={sectionLabel}>Expectations From The Webinar</p>
        <div className="grid gap-3 md:grid-cols-2">
          {objectiveOptions.map((objective) => {
            const active = selectedObjectives.includes(objective);
            return (
              <button
                key={objective}
                type="button"
                onClick={() => toggleObjective(objective)}
                disabled={isClosed}
                className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                  active
                    ? "border-teal-600 bg-teal-50 text-teal-900 dark:border-teal-400 dark:bg-teal-400/10 dark:text-teal-100"
                    : "border-slate-200 bg-white text-slate-700 hover:border-teal-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                }`}
              >
                {objective}
              </button>
            );
          })}
        </div>
        <div>
          <label className="text-sm font-semibold">Other objective</label>
          <textarea disabled={isClosed} name="otherObjective" value={form.otherObjective} onChange={handleChange} className={inputClass} rows={4} placeholder="Add anything else you'd like to learn" />
        </div>
        <div>
          <label className="text-sm font-semibold">Interested in future workshops? *</label>
          <select disabled={isClosed} name="futureWorkshopsInterest" value={form.futureWorkshopsInterest} onChange={handleChange} className={inputClass} required>
            <option value="">Select one</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Maybe">Maybe</option>
          </select>
        </div>
      </section>

      <section className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/60">
        <p className={sectionLabel}>Consent & Declaration</p>
        <label className="flex gap-3 text-sm text-slate-700 dark:text-slate-200">
          <input disabled={isClosed} type="checkbox" name="consentCommunications" checked={form.consentCommunications} onChange={handleChange} className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
          <span>
            I consent to receive future communications regarding academic activities, webinars, workshops, funding opportunities, and research initiatives organized by Operant Biomedical Research Federation (OBRF). *
          </span>
        </label>
        <label className="flex gap-3 text-sm text-slate-700 dark:text-slate-200">
          <input disabled={isClosed} type="checkbox" name="informationAccurate" checked={form.informationAccurate} onChange={handleChange} className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
          <span>I confirm that the information provided above is accurate to the best of my knowledge. *</span>
        </label>
      </section>

      <button
        type="submit"
        disabled={isSubmitting || isClosed}
        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-teal-700 to-emerald-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-teal-700/20 transition hover:from-teal-600 hover:to-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isClosed
          ? "Registration closed"
          : isSubmitting
            ? "Submitting registration..."
            : "Submit Registration"}
      </button>
    </form>
  );
};

export default WebinarRegistrationForm;
