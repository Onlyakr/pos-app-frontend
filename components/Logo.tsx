import Image from "next/image";

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
      <Image
        src="/logo.png"
        alt="Moonlight Books Logo"
        priority={true}
        width={width}
        height={height}
      />
    </div>
  );
};
export default Logo;
