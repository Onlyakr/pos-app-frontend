import Logo from "@/components/Logo";
import Role from "./Role";
import CashierMenu from "./CashierMenu";
import ManagerMenu from "./ManagerMenu";

import { users } from "@/utils/data";
import { userInfo } from "@/lib/users";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const AppSidebar = async () => {
  // const user = await userInfo();
  const user = users[0];
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
        {/* <Role /> */}
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
