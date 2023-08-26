import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import difficultyDiagram from "@/public/DifficultyDiagram.png";
import importanceDiagram from "@/public/ImportanceDiagram.png";

export default function InfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-stone-50 text-stone-900 border-2 border-stone-50 hover:bg-stone-900 hover:text-stone-50 lg:w-72 w-44 lg:text-sm text-xs"
          variant="outline"
          size="sm"
        >
          How does it work?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-stone-900">
        <DialogHeader className="space-y-5">
          <DialogTitle className="italic text-stone-50 lg:text-xl text-base">
            THE MASTERY CHECKLIST
          </DialogTitle>
          <p className="text-stone-400 space-y-4 lg:text-sm text-xs">
            Define your daily tasks by inputing the{" "}
            <span className="text-stone-50 italic"></span>{" "}
            <span className="text-stone-50 italic">Difficulty</span> and{" "}
            <span className="text-stone-50 italic">Importance</span> of each of
            them. Then, a table with all the tasks will be shown sorted by {" "}
            <span className="text-stone-50 italic">Priority</span>.
          </p>
          <p className="text-stone-400 space-y-4 lg:text-sm text-xs">
            The <span className="text-stone-50 italic">Difficulty</span> and{" "}
            <span className="text-stone-50 italic">Importance</span> units
            should be negatively correlated as shown in the diagrams below.
          </p>
        </DialogHeader>
        <div className="flex flex-col justify-center items-center space-y-5">
          <Image
            alt="Difficulty Diagram"
            className="border-2 border-stone-50"
            height={400}
            width={400}
            src={difficultyDiagram}
          />
          <Image
            alt="Difficulty Diagram"
            className="border-2 border-stone-50"
            height={400}
            width={400}
            src={importanceDiagram}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
