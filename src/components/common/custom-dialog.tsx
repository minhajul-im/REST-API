import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type DemoType = {
  open: boolean;
  title: string;
  linkText: string;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
};

export const CustomDialog = ({
  onOpen,
  onClose,
  open,
  title,
  children,
  linkText,
}: DemoType) => {
  return (
    <Dialog
      open={open}
      onOpenChange={(openState) => (openState ? onOpen() : onClose())}>
      <DialogTrigger asChild>
        <Button
          onClick={onOpen}
          className="text-sm text-muted-foreground transition-colors duration-300 hover:text-blue-500 cursor-pointer"
          variant="link">
          {linkText}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-sm md:max-w-xl lg:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-center my-6">{title}</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
