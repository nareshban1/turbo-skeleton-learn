'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../atoms';

export default function CustomModal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  return createPortal(
    <div className="">
      <dialog ref={dialogRef} className="flex flex-col" onClose={onClose}>
        {children}
        <Button onClick={onClose} className="bg-red-200 p-1">
          Close
        </Button>
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}
