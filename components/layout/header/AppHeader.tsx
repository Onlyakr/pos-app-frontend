"use client";

import Path from "./Path";
import PromotionButton from "@/components/promotions/PromotionButton";
import HistoryButton from "@/components/carts/HistoryButton";
import Logo from "@/components/Logo";
import LogoutButton from "@/components/auth/LogoutButton";
import useManager from "@/store/userStore";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";

const AppHeader = () => {
  const { open } = useSidebar();
  const { isManager } = useManager();

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
        {isManager && (
          <>
            {pathname.split("/")[1] === "products" && <PromotionButton />}
            {pathname.split("/")[1] === "sales" && !pathname.split("/")[2] && (
              <HistoryButton />
            )}
          </>
        )}
        {/* {pathname.split("/")[1] === " sales" && <ProductButton />} */}
        <ModeToggle />
      </div>

      <LogoutButton />
    </div>
  );
};
export default AppHeader;
