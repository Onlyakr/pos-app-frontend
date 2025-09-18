import { MenuItemProps } from "@/types";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Warehouse,
} from "lucide-react";

export const promotionHeaders = [
  "Start Date",
  "End Date",
  "Name",
  "Discount",
  "Quota",
];

export const productsHeaders = ["ID", "Category", "Name", "Quantity", "Price"];

export const historyHeaders = ["Date", "Receipt No.", "Sales List"];

export const cartHeaders = ["List", "Quantity", "Price", "Adjust"];

export const stockHeaders = ["Name", "Quantity"];

export const orderHeaders = ["List", "Quantity", "Price"];

export const cashierMenuItems: MenuItemProps[] = [
  {
    label: "Products",
    icon: Package,
    href: "/products",
  },
  {
    label: "Sales",
    icon: ShoppingCart,
    href: "/sales",
  },
];

export const managerMenuItems: MenuItemProps[] = [
  {
    label: "Products",
    icon: Package,
    href: "/products",
  },
  {
    label: "Sales",
    icon: ShoppingCart,
    href: "/sales",
  },
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Stocks",
    icon: Warehouse,
    href: "/stocks",
  },
];
