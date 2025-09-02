"use client";

import { logOutUser } from "@/lib/users";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await logOutUser();
      toast.success("Logout successful");
      router.push("/login");
    } catch (error) {
      const e = error as Error;
      console.error("Logout failed: ", e.message);
      toast.error("Logout failed");
    }
  };

  return (
    <Button onClick={handleLogOut} variant="destructive" className="mt-1 w-25">
      Logout
    </Button>
  );
};
export default LogoutButton;
