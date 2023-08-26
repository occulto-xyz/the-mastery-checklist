import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AlternativeOptionsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-stone-900 text-stone-50 border-2 border-stone-50 hover:bg-stone-50 hover:text-stone-900 lg:w-72 w-44 lg:text-sm text-xs"
          variant="outline"
        >
          What now?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xs bg-stone-900">
        <DialogHeader className="space-y-5">
          <DialogTitle className="italic text-stone-50">
            Alternative Options
          </DialogTitle>
          <p className="text-stone-400 space-y-4 lg:text-sm text-xs">
            For now, the table is stored locally, which means if you close this
            window or the browser, the data will be lost. In the future, we may
            implement an authentication process and storage solution to allow
            you to preserve the data, check your tasks and visualize a history.
          </p>
          <p className="text-stone-400 space-y-4 lg:text-sm text-xs">
            If you're in a desktop or tablet, you can download the table as an
            image by clicking the button. If you're in a mobile device, you can
            rotate your screen and then download the table as an image.
          </p>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
