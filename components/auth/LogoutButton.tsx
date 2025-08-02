"use client";

import { logOutUser } from "@/lib/users";
import { Button } from "../ui/button";

const LogoutButton = () => {
  return (
    <Button onClick={logOutUser} variant="destructive" className="mt-1 w-25">
      Logout
    </Button>
  );
};
export default LogoutButton;
