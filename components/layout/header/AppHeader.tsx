"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import Path from "./Path";
import Image from "next/image";
import UserProfile from "./UserProfile";
import logo from "@/public/main.png";
import PromotionButton from "@/components/promotions/PromotionButton";
import HistoryButton from "@/components/carts/HistoryButton";
// import { getAccessToken, testRoleUser } from "@/lib/users";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const AppHeader = () => {
  const { open } = useSidebar();
  const pathname = usePathname();

  return (
    <div className="bg-background/30 sticky top-0 z-50 flex h-10 items-center justify-between gap-5 px-2 py-7 backdrop-blur-sm">
      <div
        className={`items-center justify-start gap-5 ${open ? "hidden" : "flex"}`}
      >
        <SidebarTrigger />
        <Logo width={50} height={50} />
      </div>

      <div
        className={`flex flex-1 ${open ? "justify-start" : "justify-center"}`}
      >
        <Path />
      </div>

      <div className="flex items-center justify-end gap-5">
        {pathname.split("/")[1] === "products" && <PromotionButton />}
        {pathname.split("/")[1] === "sales" && !pathname.split("/")[2] && (
          <HistoryButton />
        )}
        {/* <UserProfile /> */}
        <ModeToggle />
      </div>

      {/* <Button onClick={() => getAccessToken().then((res) => console.log(res))}>
        Refresh Token
      </Button> */}

      {/* <Button onClick={() => testRoleUser().then((res) => console.log(res))}>
        Test Role
      </Button> */}
    </div>
  );
};
export default AppHeader;
