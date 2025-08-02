import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import NavLink from "@/components/NavLink";
import { managerMenuItems } from "@/utils/data";

const ManagerMenu = () => {
  return (
    <SidebarMenu>
      {managerMenuItems.map((item) => (
        <SidebarMenuItem key={item.label}>
          <SidebarMenuButton className="mb-5 h-12 rounded-2xl">
            <NavLink href={item.href}>
              <div className="bg-sidebar-foreground rounded-full p-1.5">
                <item.icon className="text-sidebar" size={20} />
              </div>
              <span>{item.label}</span>
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};
export default ManagerMenu;
