import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function FormButton() {
  const { pending } = useFormStatus();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <div className="lg:pt-8 pt-0">
      <Button
        className="bg-stone-50 text-stone-900 border-2 border-stone-50 hover:bg-stone-900 hover:text-stone-50 lg:w-72 w-44"
        variant="outline"
        type="submit"
        size="sm"
        onClick={() => {
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        }}
      >
        {pending && <Icons.spinner className="animate-spin w-6 h-6" />}
        {!pending && isSubmitted ? (
          <Icons.check className="w-6 h-6" />
        ) : (
          "Add Task"
        )}
      </Button>
    </div>
  );
}
