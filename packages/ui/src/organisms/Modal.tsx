import { Dialog } from '@headlessui/react';
import { ReactNode } from 'react';

const Modal = ({
  isOpen,
  toggleModal,
  children,
}: {
  isOpen: boolean;
  toggleModal: () => void;
  children: ReactNode;
}) => {
  return (
    <Dialog open={isOpen} onClose={() => toggleModal()}>
      <Dialog.Panel>
        <Dialog.Title>Title</Dialog.Title>
        {children}
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;
