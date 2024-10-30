import { Head } from "@inertiajs/react";

export default function AppLayout({
  title,
  children,
}: React.PropsWithChildren<{ title: string }>) {
  return (
    <>
      <Head title={title} />

      <div className="flex flex-col h-screen overflow-hidden bg-background text-foreground sm:flex-row">
        {children}
      </div>
    </>
  );
}
