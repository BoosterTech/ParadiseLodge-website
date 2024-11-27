import Image from "next/image";
import Link from "next/link";
import darklogo from "@/public/logo-dark.png";

function Logo() {
  return (
    <Link  href="/" className="flex items-center gap-4 z-10">
      <Image
        src={darklogo}
        height="70"
      
        alt="The Wild Oasis logo"
        priority={true}
      />
      <span className="text-xl font-semibold text-primary-100"></span>
    </Link>
  );
}

export default Logo;
