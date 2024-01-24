import { Modal } from './modal';

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  return <Modal>{id}</Modal>;
}
