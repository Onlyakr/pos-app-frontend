import { Smile } from "lucide-react";
import { Button } from "../ui/button";
import AppHeader from "./header/AppHeader";
import AppSidebar from "./sidebar/AppSidebar";
import Link from "next/link";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppSidebar />
      <main className="flex h-screen flex-1 flex-col p-2 pl-0">
        <AppHeader />
        <div className="bg-card border-border relative flex h-1/2 flex-1 items-start justify-center rounded-lg border p-2 shadow-md">
          {children}

          {/* Funny button */}
          <Button
            variant="destructive"
            className="absolute right-2 bottom-2 size-11"
            asChild
          >
            <Link href="/game">
              <Smile />
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
};

export default AppLayout;
