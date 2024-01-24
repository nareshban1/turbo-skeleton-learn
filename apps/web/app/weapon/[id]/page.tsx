export default function WeaponPage({
  params: { id: weaponId },
}: Readonly<{
  params: { id: string };
}>) {
  return <div>{weaponId}</div>;
}
