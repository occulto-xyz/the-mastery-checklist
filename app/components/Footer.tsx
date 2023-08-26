import Image from "next/image";
import occultoIcons from "@/app/icons/occulto.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="lg:grid lg:grid-cols-2 flex flex-col p-24 w-screen">
      <div className="grid-cols-1 flex flex-row lg:space-x-2 lg:space-y-0 space-y-4 lg:justify-start justify-center items-center">
        <h1 className="lg:text-base text-xs font-extralight text-stone-100">
          Made by
        </h1>
        <Link href="https://occulto.xyz" passHref>
          <Image src={occultoIcons} alt="Occulto Icon" width={40} height={40} />
        </Link>
      </div>
      <div className="grid-cols-1 flex lg:justify-end justify-center items-center">
        <Link
          href="mailto:occcultoagency@gmail.com?subject=Issue%20in%20The%Checklist%20App"
          passHref
        >
          <Button
            variant="link"
            className="lg:text-base text-xs font-extralight text-stone-100 underline"
          >
            Report an issue
          </Button>
        </Link>
      </div>
    </footer>
  );
}
