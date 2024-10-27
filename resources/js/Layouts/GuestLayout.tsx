import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary">
      <div className="flex flex-col w-full max-w-md p-6 my-10 space-y-6 overflow-hidden rounded-lg shadow-md bg-background">
        <Link href="/" className="w-20 mx-auto">
          <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
        </Link>
        {children}
      </div>
    </div>
  );
}
