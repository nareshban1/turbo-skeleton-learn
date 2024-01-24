import Link from 'next/link';

const getAllAgents = async () => {
  'use server';
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  const { signal } = new AbortController();
  const res = await fetch('https://valorant-api.com/v1/agents', { signal });
  const data = await res.json();
  return data;
};

const AllAgents = async () => {
  const allAgents = await getAllAgents();

  return (
    <section>
      <h1 className="font-bold text-xl">Agents</h1>
      <div className="flex flex-col">
        {allAgents?.data
          ?.filter((agent) => agent.isPlayableCharacter)
          .map((agent) => (
            <Link
              className="bg-gray-300 w-auto p-1 my-1"
              href={`agent/${agent.uuid}`}
              key={agent.uuid}
            >
              {agent.displayName}
            </Link>
          ))}
      </div>
    </section>
  );
};

export default AllAgents;
