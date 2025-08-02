"use client";

import { logOutUser } from "@/lib/users";
import { Button } from "../ui/button";

const LogoutButton = () => {
  return (
    <Button
      onClick={logOutUser}
      variant="outline"
      className="hover:bg-destructive mt-1 w-25 hover:text-white"
    >
      Logout
    </Button>
  );
};
export default LogoutButton;
