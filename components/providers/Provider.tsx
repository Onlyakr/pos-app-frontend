import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "./theme-provider";
import ReactQueryProvider from "./ReactQueryProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ReactQueryProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
};
export default Providers;
