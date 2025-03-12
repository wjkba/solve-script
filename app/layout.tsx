import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "SolveScript",
  description:
    "Work on JavaScript-based challenges. Get instant feedback on your code and track your progress as you improve.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="max-w-xl pt-6 px-4 min-h-screen mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
