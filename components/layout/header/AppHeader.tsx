"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import { getAccessToken, getManager } from "@/lib/users";

import Path from "./Path";
import PromotionButton from "@/components/promotions/PromotionButton";
import HistoryButton from "@/components/carts/HistoryButton";
import Logo from "@/components/Logo";
import LogoutButton from "@/components/auth/LogoutButton";
import GetAccessButton from "@/components/auth/GetAccessButton";

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

        <ModeToggle />
      </div>

      {/* <GetAccessButton /> */}

      {/* <Button
        onClick={() => getManager().then((res) => console.log(res.status))}
      >
        Manager
      </Button> */}

      <LogoutButton />
    </div>
  );
};
export default AppHeader;
