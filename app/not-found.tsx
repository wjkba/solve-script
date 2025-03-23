import ButtonPrimary from "@/components/ButtonPrimary";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="flex max-w-md flex-col justify-center px-4">
      <h1 className="mb-4 text-5xl font-bold text-neutral-200">404</h1>
      <h2 className="mb-6 text-2xl text-neutral-300">Page Not Found</h2>
      <p className="mb-8 max-w-md text-neutral-400">
        Requested page was not found
      </p>
      <ButtonPrimary>
        <Link href="/">Return Home</Link>
      </ButtonPrimary>
    </div>
  );
}
