import AppHeader from "./header/AppHeader";
import AppSidebar from "./sidebar/AppSidebar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppSidebar />
      <main className="flex h-screen flex-1 flex-col p-2 pl-0">
        <AppHeader />
        <div className="bg-card border-border flex h-1/2 flex-1 items-start justify-center rounded-lg border p-2 shadow-md">
          {children}
        </div>
      </main>
    </>
  );
};

export default AppLayout;
