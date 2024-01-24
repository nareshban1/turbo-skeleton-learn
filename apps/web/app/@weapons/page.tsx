const getAllWeapons = async () => {
  'use server';
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  const { signal } = new AbortController();
  const res = await fetch('https://valorant-api.com/v1/weapons', { signal });
  const data = await res.json();
  return data;
};

const AllWeapons = async () => {
  const allWeapons = await getAllWeapons();

  return (
    <section>
      <h1 className="font-bold text-xl">Weapons</h1>
      {allWeapons?.data?.map((weapon) => <h2>{weapon.displayName}</h2>)}
    </section>
  );
};

export default AllWeapons;
