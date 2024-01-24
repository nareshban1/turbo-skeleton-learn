import Link from 'next/link';

const getAllWeapons = async () => {
  'use server';
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  const { signal } = new AbortController();
  const res = await fetch('https://valorant-api.com/v1/weapons', {
    signal,
    cache: 'no-cache',
  });
  const data = await res.json();
  return data;
};

const AllWeapons = async () => {
  const allWeapons = await getAllWeapons();

  return (
    <section>
      <h1 className="font-bold text-xl">Weapons</h1>
      <div className="flex flex-col">
        {allWeapons?.data?.map((weapon) => (
          <Link
            key={weapon.uuid}
            href={`weapon/${weapon.uuid}`}
            passHref
            className="bg-gray-300 w-auto p-1 my-1"
          >
            {weapon.displayName}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllWeapons;
