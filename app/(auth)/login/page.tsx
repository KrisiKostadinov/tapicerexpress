import LoginForm from "@/app/(auth)/login/components/login-form";
import { getDefaultCredentials } from "@/app/(auth)/login/data";

export default async function Login() {
  const credentials = await getDefaultCredentials();

  return (
    <main className="w-full h-screen">
      <div className="max-w-sm mx-auto bg-white border rounded shadow p-5 mt-20 space-y-5">
        <h1 className="text-2xl font-semibold text-center">Вход в системата</h1>
        <LoginForm email={credentials.email} password={credentials.password} />
      </div>
    </main>
  );
}
