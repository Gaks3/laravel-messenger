import Checkbox from "@/Components/Checkbox";
import FormAlert from "@/Components/FormAlert";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Login({
  status,
  canResetPassword,
}: {
  status?: string;
  canResetPassword: boolean;
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("login"), {
      onFinish: () => reset("password"),
    });
  };

  return (
    <GuestLayout>
      <Head title="Log in" />

      {status && <FormAlert message={status} />}

      <form onSubmit={submit} className="space-y-4">
        <div>
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="block w-full mt-1"
            autoComplete="username"
            isFocused={true}
            onChange={(e) => setData("email", e.target.value)}
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div>
          <InputLabel htmlFor="password" value="Password" />

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="block w-full mt-1"
            autoComplete="current-password"
            onChange={(e) => setData("password", e.target.value)}
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              checked={data.remember}
              onChange={(e) => setData("remember", e.target.checked)}
            />
            <span className="text-sm text-foreground ms-2">Remember me</span>
          </label>
          {canResetPassword && (
            <Link href={route("password.request")} className="btn-link">
              Forgot your password?
            </Link>
          )}
        </div>

        <div className="flex">
          <PrimaryButton className="w-full" disabled={processing}>
            Log in
          </PrimaryButton>
        </div>

        <div className="flex justify-center">
          <Link href={route("register")} className="btn-link">
            Don't have a account?
          </Link>
        </div>
      </form>
    </GuestLayout>
  );
}
