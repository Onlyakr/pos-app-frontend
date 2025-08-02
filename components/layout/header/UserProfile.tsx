import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { users } from "@/utils/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { buttonVariants } from "@/components/ui/button";
import LogoutButton from "@/components/auth/LogoutButton";

const user = users[1];

const name = user?.name.split(" ");

const UserProfile = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            className={`${buttonVariants({ variant: "outline" })} flex items-center gap-3`}
          >
            <Avatar className="size-7">
              <AvatarImage src={user?.imageUrl} />
              <AvatarFallback>{name[0].charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{name[0]}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent asChild>
          <DropdownMenuItem>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default UserProfile;
