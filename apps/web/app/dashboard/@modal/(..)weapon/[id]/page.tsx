import { Modal } from './modal';

const getWeaponDetail = async (weaponId: string) => {
  'use server';
  const { signal } = new AbortController();
  const res = await fetch(`https://valorant-api.com/v1/weapons/${weaponId}`, {
    signal,
    cache: 'no-cache',
  });
  const data = await res.json();
  return data;
};

export default async function WeaponModal({
  params: { id },
}: Readonly<{
  params: { id: string };
}>) {
  const weaponDetail = await getWeaponDetail(id);
  return <Modal>{JSON.stringify(weaponDetail)}</Modal>;
}
