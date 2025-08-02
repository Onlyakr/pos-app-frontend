import Image from "next/image";
import logo from "@/public/logo.png";

const Logo = ({
  width = 80,
  height = 80,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <Image src={logo} alt="logo" width={width} height={height} />
      <span className="text-foreground hidden text-lg font-medium md:block">
        Moonlight Books
      </span>
    </div>
  );
};
export default Logo;
