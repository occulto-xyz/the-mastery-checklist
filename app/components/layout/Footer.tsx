import Image from "next/image";
import occultoIcons from "@/app/icons/occulto.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="lg:grid lg:grid-cols-2 flex flex-col p-24 w-screen overflow-x-hidden">
      <div className="grid-cols-1 flex flex-col">
        <div className="flex flex-row lg:space-x-2 lg:justify-start justify-center items-center">
          <h1 className="lg:text-base text-xs font-extralight text-stone-100">
            Made by
          </h1>
          <Link href="https://occulto.xyz" passHref target="_blank">
            <Image
              alt="Occulto Icon"
              className="animate-spin"
              src={occultoIcons}
              width={40}
              height={40}
            />
          </Link>
        </div>
        <h1 className="lg:text-base text-xs font-extralight text-stone-100 italic">
          For the Achieivers
        </h1>
      </div>
      <div className="grid-cols-1 flex flex-col lg:justify-end justify-center lg:items-end items-center">
        <Link
          href="https://github.com/occulto-xyz/the-checklist"
          passHref
          target="_blank"
        >
          <Button
            variant="link"
            className="lg:text-base text-xs font-extralight text-stone-100 underline"
          >
            Source code
          </Button>
        </Link>
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
