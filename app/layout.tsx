import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog Auto-Prioritizer — AI-powered changelog entry prioritization",
  description: "Analyzes git commits and automatically prioritizes changelog entries by user impact. Built for product managers and release managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fbe6b61d-8973-4cad-9498-2a4aa6818dbf"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
