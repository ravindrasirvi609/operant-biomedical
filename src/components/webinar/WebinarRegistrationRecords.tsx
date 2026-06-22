"use client";

import axios from "axios";
import * as XLSX from "xlsx";
import React, { useEffect, useMemo, useState } from "react";

type WebinarRegistration = {
  _id: string;
  fullName: string;
  gender: string;
  email: string;
  mobileNumber: string;
  country: string;
  stateProvince: string;
  city: string;
  professionalCategory: string;
  otherProfessionalCategory?: string;
  designation: string;
  departmentSpecialization: string;
  organizationName: string;
  organizationType: string;
  otherOrganizationType?: string;
  yearsExperience: string;
  objectives: string[];
  otherObjective?: string;
  futureWorkshopsInterest: string;
  consentCommunications: boolean;
  informationAccurate: boolean;
  createdAt?: string;
  updatedAt?: string;
};

const fieldGroups = [
  { label: "Personal", fields: ["fullName", "gender", "email", "mobileNumber", "country", "stateProvince", "city"] },
  { label: "Professional", fields: ["professionalCategory", "designation", "departmentSpecialization", "organizationName", "organizationType", "yearsExperience"] },
  { label: "Preferences", fields: ["objectives", "futureWorkshopsInterest", "consentCommunications", "informationAccurate", "createdAt"] },
];

function formatValue(value: unknown) {
  if (Array.isArray(value)) return value.length ? value.join(", ") : "—";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (!value) return "—";
  return String(value);
}

function safeDate(value?: string) {
  if (!value) return "—";
  return new Date(value).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function WebinarRegistrationRecords() {
  const [registrations, setRegistrations] = useState<WebinarRegistration[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadRegistrations = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/webinar-registration/list");
        const items = response.data?.registrations ?? [];
        setRegistrations(items);
        setSelectedId((current) => current || items[0]?._id || "");
      } catch (err: any) {
        setError(err?.response?.data?.error || "Failed to load webinar registrations.");
      } finally {
        setLoading(false);
      }
    };

    loadRegistrations();
  }, []);

  const selectedRegistration = useMemo(
    () => registrations.find((item) => item._id === selectedId) ?? registrations[0],
    [registrations, selectedId]
  );

  const stats = useMemo(() => {
    const total = registrations.length;
    const uniqueCountries = new Set(registrations.map((item) => item.country).filter(Boolean)).size;
    const interestCount = registrations.filter((item) => item.futureWorkshopsInterest === "Yes").length;
    return { total, uniqueCountries, interestCount };
  }, [registrations]);

  const exportToExcel = () => {
    const worksheetData = registrations.map((item, index) => ({
      "#": index + 1,
      Name: item.fullName,
      Gender: item.gender,
      Email: item.email,
      Mobile: item.mobileNumber,
      Country: item.country,
      "State / Province": item.stateProvince,
      City: item.city,
      "Professional Category": item.professionalCategory,
      "Other Professional Category": item.otherProfessionalCategory || "",
      Designation: item.designation,
      "Department / Specialization": item.departmentSpecialization,
      Organization: item.organizationName,
      "Organization Type": item.organizationType,
      "Other Organization Type": item.otherOrganizationType || "",
      "Years of Experience": item.yearsExperience,
      Objectives: item.objectives?.join(", ") || "",
      "Other Objective": item.otherObjective || "",
      "Future Workshops Interest": item.futureWorkshopsInterest,
      "Consent Communications": item.consentCommunications ? "Yes" : "No",
      "Information Accurate": item.informationAccurate ? "Yes" : "No",
      "Submitted At": safeDate(item.createdAt),
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Registrations");
    const fileName = `obrf-webinar-registrations-${new Date().toISOString().slice(0, 10)}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f8fafc_0%,_#ffffff_40%,_#eefbf8_100%)] text-slate-900">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal-300">OBRF Webinar Registration Data</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Registration records, details, and export</h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Review every webinar submission in a table, open a participant detail view, and export the full dataset to Excel with one click.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <StatCard label="Total registrations" value={String(stats.total).padStart(2, "0")} />
            <StatCard label="Countries represented" value={String(stats.uniqueCountries).padStart(2, "0")} />
            <StatCard label="Interested in future workshops" value={String(stats.interestCount).padStart(2, "0")} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-10">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-black tracking-tight">Submissions table</h2>
            <p className="mt-1 text-sm text-slate-600">Select a row to inspect the full registration details.</p>
          </div>
          <button
            type="button"
            onClick={exportToExcel}
            disabled={!registrations.length}
            className="inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Export to Excel
          </button>
        </div>

        {loading ? (
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-sm">
            Loading webinar registrations...
          </div>
        ) : error ? (
          <div className="rounded-[1.75rem] border border-rose-200 bg-rose-50 p-6 text-rose-700">
            {error}
          </div>
        ) : registrations.length === 0 ? (
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-sm">
            No webinar registrations found yet.
          </div>
        ) : (
          <div className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50 text-left text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    <tr>
                      <th className="px-4 py-4">Name</th>
                      <th className="px-4 py-4">Email</th>
                      <th className="px-4 py-4">Organization</th>
                      <th className="px-4 py-4">Category</th>
                      <th className="px-4 py-4">Submitted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {registrations.map((item) => (
                      <tr
                        key={item._id}
                        onClick={() => setSelectedId(item._id)}
                        className={`cursor-pointer transition hover:bg-teal-50 ${selectedRegistration?._id === item._id ? "bg-teal-50" : ""}`}
                      >
                        <td className="px-4 py-4">
                          <div className="font-semibold text-slate-900">{item.fullName}</div>
                          <div className="text-sm text-slate-500">{item.city}, {item.country}</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-600">{item.email}</td>
                        <td className="px-4 py-4 text-sm text-slate-600">{item.organizationName}</td>
                        <td className="px-4 py-4 text-sm text-slate-600">{item.professionalCategory}</td>
                        <td className="px-4 py-4 text-sm text-slate-600">{safeDate(item.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-600">Details</p>
                  <h3 className="mt-2 text-xl font-black tracking-tight">{selectedRegistration?.fullName || "Select a participant"}</h3>
                </div>
                {selectedRegistration ? (
                  <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-700">Active</span>
                ) : null}
              </div>

              {selectedRegistration ? (
                <div className="mt-6 space-y-6">
                  {fieldGroups.map((group) => (
                    <div key={group.label} className="rounded-3xl bg-slate-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">{group.label}</p>
                      <dl className="mt-4 space-y-3">
                        {group.fields.map((field) => (
                          <div key={field} className="grid grid-cols-[140px_1fr] gap-4 text-sm">
                            <dt className="font-medium text-slate-500">{fieldToLabel(field)}</dt>
                            <dd className="break-words font-semibold text-slate-900">{formatValue((selectedRegistration as any)[field])}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ))}
                  <div className="rounded-3xl border border-teal-100 bg-teal-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">Notes</p>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {selectedRegistration.otherObjective ? selectedRegistration.otherObjective : "No additional objective was provided."}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="mt-6 text-sm leading-7 text-slate-600">Choose a submission from the table to see the participant profile and consent details.</p>
              )}
            </aside>
          </div>
        )}
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
      <p className="text-sm text-slate-300">{label}</p>
      <p className="mt-2 text-3xl font-black tracking-tight text-white">{value}</p>
    </div>
  );
}

function fieldToLabel(field: string) {
  const labels: Record<string, string> = {
    fullName: "Full name",
    gender: "Gender",
    email: "Email",
    mobileNumber: "Mobile",
    country: "Country",
    stateProvince: "State / Province",
    city: "City",
    professionalCategory: "Category",
    designation: "Designation",
    departmentSpecialization: "Department",
    organizationName: "Organization",
    organizationType: "Organization type",
    yearsExperience: "Experience",
    objectives: "Objectives",
    futureWorkshopsInterest: "Future workshops",
    consentCommunications: "Consent",
    informationAccurate: "Accurate",
    createdAt: "Submitted at",
  };

  return labels[field] || field;
}
