import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    template: "%s | Operant Biomedical Research Federation",
    default: "Operant Biomedical Research Federation",
  },
  description: "Operant Biomedical Research Federation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/img/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap"
        />
        <title>Operant Biomedical Research Federation</title>
      </head>

      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
