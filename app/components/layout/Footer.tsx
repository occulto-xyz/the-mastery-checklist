import Image from "next/image";
import occultoIcons from "@/app/icons/occulto.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="lg:grid lg:grid-cols-2 flex flex-col p-24 w-screen overflow-x-hidden">
      <div className="grid-cols-1 flex flex-col">
        <div className="flex flex-row lg:space-x-2 lg:justify-start justify-center items-center">
          <h3 className="lg:text-base text-xs font-extralight text-stone-100 italic">
            Made by
          </h3>
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
        <div className="space-y-2 mt-2">
          <div className="flex flex-row space-x-2 lg:justify-start justify-center items-center">
          <h3 className="lg:text-base text-xs font-extralight text-stone-100 italic">
            For Lusine
            </h3>
            <span className="animate-pulse text-lg">🌸</span> 
          </div>
        </div>
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
