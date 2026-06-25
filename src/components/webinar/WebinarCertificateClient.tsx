"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Registration = {
  fullName: string;
  email: string;
};

export default function WebinarCertificateClient({ email }: { email: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [registration, setRegistration] = useState<Registration | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      if (!email) {
        setError("Please open the certificate page with your registered email.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("/api/webinar-registration", {
          params: { email },
        });

        if (!response.data?.exists || !response.data?.registration) {
          setError("No registration was found for this email.");
          setLoading(false);
          return;
        }

        setRegistration({
          fullName: response.data.registration.fullName,
          email: response.data.registration.email,
        });
      } catch {
        setError("We could not load your certificate details.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [email]);

  useEffect(() => {
    const renderCertificate = async () => {
      if (!registration || !canvasRef.current) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const background = new window.Image();
      background.src = "/certificateweb.png";

      await new Promise<void>((resolve, reject) => {
        background.onload = () => resolve();
        background.onerror = () => reject(new Error("Unable to load certificate background"));
      });

      canvas.width = background.naturalWidth;
      canvas.height = background.naturalHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

      ctx.textAlign = "center";
      ctx.fillStyle = "#1e293b";

      const lines = buildCertificateLines(registration.fullName);
      const fontSize = fitFontSize(ctx, lines, canvas.width * 0.74, 44, 30);
      ctx.font = `500 ${fontSize}px Arial, sans-serif`;
      const startY = canvas.height * 0.51;
      const lineHeight = Math.round(fontSize * 1.42);
      lines.forEach((line, index) => {
        ctx.fillText(line, canvas.width / 2, startY + index * lineHeight);
      });
    };

    renderCertificate().catch(() => {
      setError("We could not prepare the certificate image.");
    });
  }, [registration]);

  const downloadCertificate = async () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/png")
    );

    if (!blob) return;

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `obrf-webinar-certificate-${registration?.fullName
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "participant"}.png`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const title = useMemo(
    () => registration?.fullName || "Webinar Certificate",
    [registration?.fullName]
  );

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f8fafc_0%,_#ffffff_45%,_#eefbf8_100%)] px-4 py-12 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-teal-600">
              OBRF Webinar Certificate
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              {title}
            </h1>
          </div>
          <Link
            href="/webinar-registration"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
          >
            Back to registration
          </Link>
        </div>

        {loading ? (
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-sm">
            Loading certificate...
          </div>
        ) : error ? (
          <div className="rounded-[2rem] border border-rose-200 bg-rose-50 p-6 text-rose-700">
            {error}
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
              <canvas ref={canvasRef} className="h-auto w-full rounded-[1.5rem]" />
            </div>

            <aside className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-600">
                  Participant
                </p>
                <h2 className="mt-2 text-2xl font-black">{registration?.fullName}</h2>
                <p className="mt-1 text-sm text-slate-600">{registration?.email}</p>
              </div>

              <p className="text-sm leading-7 text-slate-600">
                Your certificate has been generated using the official OBRF
                certificate background. You can download the finished image
                below.
              </p>

              <button
                type="button"
                onClick={downloadCertificate}
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-teal-700 to-emerald-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-teal-700/20 transition hover:from-teal-600 hover:to-emerald-500"
              >
                Download certificate
              </button>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

function buildCertificateLines(fullName: string) {
  return [
    `This is to certify that ${fullName} has successfully`,
    `participated as a Delegate in the Online Webinar on`,
    `"Innovative Approaches in Medical Research: Leveraging AI`,
    `Technologies and ICMR Funding Opportunities", organized by the`,
    `Operant Biomedical Research Federation (OBRF) on 25 June 2026.`,
  ];
}

function fitFontSize(
  ctx: CanvasRenderingContext2D,
  lines: string[],
  maxWidth: number,
  preferredSize: number,
  minSize: number
) {
  for (let size = preferredSize; size >= minSize; size -= 1) {
    ctx.font = `500 ${size}px Arial, sans-serif`;
    const widestLine = lines.reduce(
      (widest, line) =>
        Math.max(widest, ctx.measureText(line).width),
      0
    );
    if (widestLine <= maxWidth) {
      return size;
    }
  }

  return minSize;
}
