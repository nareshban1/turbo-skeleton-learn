export default function AgentPage({
  params: { id: agentId },
}: Readonly<{
  params: { id: string };
}>) {
  return <div>{agentId}</div>;
}
