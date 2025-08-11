"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import Path from "./Path";
import Image from "next/image";
import UserProfile from "./UserProfile";
import logo from "@/public/logo.png";
import PromotionButton from "@/components/promotions/PromotionButton";
import HistoryButton from "@/components/carts/HistoryButton";
// import { Button } from "@/components/ui/button";
// import { testRoleUser } from "@/lib/users";

const AppHeader = () => {
  const { open } = useSidebar();
  const pathname = usePathname();

  return (
    <div className="bg-background/30 sticky top-0 z-50 flex h-10 items-center justify-between gap-5 px-2 py-7 backdrop-blur-sm">
      <div
        className={`items-center justify-start gap-5 ${open ? "hidden" : "flex"}`}
      >
        <SidebarTrigger />
        <Image src={logo} alt="logo" width={50} height={50} />
      </div>

      <div
        className={`flex flex-1 ${open ? "justify-start" : "justify-center"}`}
      >
        <Path />
      </div>

      <div className="flex flex-1 items-center justify-end gap-5">
        {pathname.split("/")[1] === "products" && <PromotionButton />}
        {pathname.split("/")[1] === "sales" && <HistoryButton />}
        <UserProfile />
        <ModeToggle />
      </div>
      {/* <Button onClick={() => testRoleUser()}>Test Manager</Button> */}
    </div>
  );
};
export default AppHeader;
