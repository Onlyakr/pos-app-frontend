"use client";

import Logo from "@/components/Logo";
import CashierMenu from "./CashierMenu";
import ManagerMenu from "./ManagerMenu";
import Role from "./Role";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getManager } from "@/lib/users";
import { useEffect, useState } from "react";

const AppSidebar = () => {
  const [isManager, setIsManager] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchManager = async () => {
      try {
        setIsLoading(true);
        const res = await getManager();
        setIsManager(res.status === 200);
      } catch (error) {
        console.error("Failed to fetch manager");
      } finally {
        setIsLoading(false);
      }
    };
    fetchManager();
  }, []);

  return (
    <Sidebar
      variant="floating"
      collapsible="offcanvas"
      className="border-none pr-0"
    >
      <SidebarHeader className="relative my-3 items-center gap-2">
        <div className="flex flex-col items-center gap-2">
          <Logo />
          <span className="text-foreground hidden text-lg font-medium md:block">
            Moonlight Books
          </span>
        </div>
        <SidebarTrigger className="absolute top-0 right-2" />
        <Role isManager={isManager} />
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="mt-3">
        <SidebarGroup className="flex grow flex-col gap-10">
          {isManager ? <ManagerMenu /> : <CashierMenu />}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
