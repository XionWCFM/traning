import * as DialogPrimitive from '@radix-ui/react-dialog';
import React from 'react';

interface dialogProps {
  open: boolean;
  onOpenChange: (bool: boolean) => void;
}

const Modal = ({ open, onOpenChange }: dialogProps) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="z-30 bg-neutral/70 fixed backdrop-blur inset-0" />
        <DialogPrimitive.Content>
          <DialogPrimitive.Title>hi</DialogPrimitive.Title>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default Modal;
