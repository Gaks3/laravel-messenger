import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

export default function Edit({
  mustVerifyEmail,
  status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-foreground">
          Profile
        </h2>
      }
    >
      <Head title="Profile" />

      <div className="py-4 sm:py-6">
        <div className="px-4 mx-auto space-y-4 max-w-7xl sm:space-y-6 sm:px-6">
          <div className="p-4 rounded-lg shadow bg-background sm:p-8">
            <UpdateProfileInformationForm
              mustVerifyEmail={mustVerifyEmail}
              status={status}
              className="max-w-xl"
            />
          </div>

          <div className="p-4 rounded-lg shadow bg-background sm:p-8">
            <UpdatePasswordForm className="max-w-xl" />
          </div>

          <div className="p-4 rounded-lg shadow bg-background sm:p-8">
            <DeleteUserForm className="max-w-xl" />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
