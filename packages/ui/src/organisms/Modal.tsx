import { Dialog } from '@headlessui/react';

const Modal = ({
  isOpen,
  toggleModal,
}: {
  isOpen: boolean;
  toggleModal: () => void;
}) => {
  return (
    <Dialog open={isOpen} onClose={() => toggleModal()}>
      <Dialog.Panel>
        <Dialog.Title>Title</Dialog.Title>
        <Dialog.Description>Description</Dialog.Description>
        <button onClick={() => toggleModal()}>Deactivate</button>
        <button onClick={() => toggleModal()}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;
