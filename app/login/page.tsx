import GetAccessButton from "@/components/auth/GetAccessButton";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage = async () => {
  return (
    <div className="flex h-svh w-full items-center justify-center p-5">
      <LoginForm />
      <GetAccessButton />
    </div>
  );
};
export default LoginPage;
