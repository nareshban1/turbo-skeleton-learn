import { Modal } from './modal';
const getAgentDetail = async (weaponId: string) => {
  'use server';
  const { signal } = new AbortController();
  const res = await fetch(`https://valorant-api.com/v1/agents/${weaponId}`, {
    signal,
    cache: 'no-cache',
  });
  const data = await res.json();
  return data;
};
export default async function AgentModalPage({
  params: { id },
}: Readonly<{
  params: { id: string };
}>) {
  const agent = await getAgentDetail(id);
  return <Modal>{JSON.stringify(agent)}</Modal>;
}
