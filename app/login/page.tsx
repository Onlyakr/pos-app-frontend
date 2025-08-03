import { getToken } from "@/lib/users";
import { redirect } from "next/navigation";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage = async () => {
  // try {
  //   const token = await getToken();
  //   if (token) {
  //     redirect("/");
  //   }
  // } catch (error) {
  //   console.error(error);
  // }

  return (
    <div className="flex h-svh w-full items-center justify-center p-5">
      <LoginForm />
    </div>
  );
};
export default LoginPage;
