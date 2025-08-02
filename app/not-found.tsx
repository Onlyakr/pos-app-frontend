import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <h1>Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/products">
        <Button variant="destructive">Go back</Button>
      </Link>
    </div>
  );
};
export default NotFoundPage;
