import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";

const Path = () => {
  const pathname = usePathname();
  const path = pathname.split("/");

  return (
    <Breadcrumb>
      <BreadcrumbList className="text-lg font-semibold">
        <BreadcrumbItem>
          <BreadcrumbLink href={`/${path[1]}`}>
            {path[1]?.toUpperCase()}
          </BreadcrumbLink>
        </BreadcrumbItem>
        {path[2] && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${path[1]}/${path[2]}`}>
                {path[2]?.toUpperCase()}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {path[3] && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${path[1]}/${path[2]}/${path[3]}`}>
                {path[3]?.toUpperCase()}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
export default Path;
