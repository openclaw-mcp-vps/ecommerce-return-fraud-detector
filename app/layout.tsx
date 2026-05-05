import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReturnGuard – Detect Return Fraud in Real-Time",
  description: "Analyze customer return patterns, order histories, and behavioral signals to flag wardrobing, return abuse, and fraudulent claims."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="177e0f1d-8cda-48cf-9df6-5967a42508fc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
