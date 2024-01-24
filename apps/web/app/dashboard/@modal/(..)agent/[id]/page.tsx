import { Modal } from './modal';

export default function WeaponModal({
  params: { id },
}: Readonly<{
  params: { id: string };
}>) {
  return <Modal>{id}</Modal>;
}
