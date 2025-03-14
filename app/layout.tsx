import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import LayoutWrapper from "@/components/LayoutWrapper";

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
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
