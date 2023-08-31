import { Separator } from "@/components/ui/separator";
import AnimatedHeaders from "./AnimatedHeaders";
import InfoDialog from "./InfoDialog";

export default function Nav() {
  return (
    <div className="w-screen p-24 space-y-7 overflow-x-hidden">
      <div className="lg:grid lg:grid-cols-2 flex flex-col justify-center items-center space-y-7">
        <div className="grid-cols-1 flex justify-start items-center">
          <AnimatedHeaders />
        </div>
        <div className="grid-cols-1 flex justify-end items-center">
          <InfoDialog />
        </div>
      </div>
      <Separator />
    </div>
  );
}
