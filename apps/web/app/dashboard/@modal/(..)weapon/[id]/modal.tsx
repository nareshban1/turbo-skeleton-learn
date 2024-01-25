'use client';

import { CustomModal } from '@repo/ui';
import { useRouter } from 'next/navigation';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  function onDismiss() {
    router.back();
  }

  return <CustomModal onClose={onDismiss}>{children}</CustomModal>;
}
