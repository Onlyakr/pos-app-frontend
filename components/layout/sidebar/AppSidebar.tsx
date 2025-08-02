import Logo from "@/components/Logo";
import Role from "./Role";
import CashierMenu from "./CashierMenu";
import ManagerMenu from "./ManagerMenu";

import { users } from "@/utils/data";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const user = users[1];

const AppSidebar = () => {
  return (
    <Sidebar variant="floating" collapsible="offcanvas" className="border-none">
      <SidebarHeader className="relative my-3 items-center gap-2">
        <Logo />
        <SidebarTrigger className="absolute top-0 right-2" />
        <Role />
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="mt-3">
        <SidebarGroup className="flex grow flex-col gap-10">
          {user.role === "cashier" && <CashierMenu />}
          {user.role === "manager" && <ManagerMenu />}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
