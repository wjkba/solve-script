"use client";

import { usePathname } from "next/navigation";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isEditorPage = pathname?.includes("/editor");

  if (isEditorPage) {
    return <div className="w-full px-10">{children}</div>;
  }

  return (
    <div className="max-w-[1024px] lg:max-w-[1440px] lg:px-[9.75rem] lg:pt-12 pt-6 px-4 min-h-screen mx-auto">
      {children}
    </div>
  );
}
