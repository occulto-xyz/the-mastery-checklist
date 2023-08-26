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
          className="bg-stone-50 text-stone-900 border-2 border-stone-50 hover:bg-stone-900 hover:text-stone-50"
          variant="outline"
          size="sm"
        >
          How does it work?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-stone-900">
        <DialogHeader className="space-y-5">
          <DialogTitle className="italic text-stone-50">
            THE CHECKLIST
          </DialogTitle>
          <DialogDescription className="text-stone-400 space-y-4">
            Define your daily tasks by inputing the{" "}
            <span className="text-stone-50 italic"></span>{" "}
            <span className="text-stone-50 italic">Difficulty</span> and{" "}
            <span className="text-stone-50 italic">Importance</span> of each of
            them. Then, a table will be shown with the tasks ordered by the{" "}
            <span className="text-stone-50 italic">Priority</span> of each of
            them.
            {/* <p className="hidden">
              When you rate a task's{" "}
              <span className="text-stone-50 italic">Difficulty</span> from 0 to
              10, you're actually placing it on a scale where 0 represents the
              most challenging and 10 is the easiest. Similarly, when you rate a
              task's <span className="text-stone-50 italic">Importance </span>
              from 0 to 10, you're placing it on a scale where 0 signifies the
              least relevant and 10 signifies the utmost relevance.
            </p> */}
          </DialogDescription>
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
