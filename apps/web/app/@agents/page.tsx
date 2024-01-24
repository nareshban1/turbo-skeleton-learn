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
      <div>
        {allAgents?.data
          ?.filter((agent) => agent.isPlayableCharacter)
          .map((agent) => <h2 key={agent.uuid}>{agent.displayName}</h2>)}
      </div>
    </section>
  );
};

export default AllAgents;
