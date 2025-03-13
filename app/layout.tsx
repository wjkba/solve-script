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
        <Header className="lg:px-[9.75rem]" />
        <div className="max-w-[1024px] lg:max-w-[1440px] lg:px-[9.75rem] lg:pt-12 pt-6 px-4 min-h-screen mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
