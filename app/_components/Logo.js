import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src="/logo-dark.png"
        height="130"
        width="130"
        
        alt="The Wild Oasis logo"
        priority={true}
      />
      <span className="text-xl font-semibold text-primary-100"></span>
    </Link>
  );
}

export default Logo;
