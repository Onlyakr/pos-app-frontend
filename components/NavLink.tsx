"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = `/${pathname.split("/")[1]}` === href;

  return (
    <Link
      href={href}
      className={`flex w-full items-center gap-2 rounded-2xl rounded-r-none p-2 font-medium ${
        isActive
          ? "border-sidebar-accent text-sidebar-primary hover:text-sidebar border-r-2"
          : ""
      }`}
    >
      {children}
    </Link>
  );
};
export default NavLink;
