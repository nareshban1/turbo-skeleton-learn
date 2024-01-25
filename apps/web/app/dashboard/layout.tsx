import { ReactNode } from 'react';
const DashboardLayout = ({
  children,
  agents,
  weapons,
  modal,
}: {
  children: ReactNode;
  agents: ReactNode;
  modal: ReactNode;
  weapons: ReactNode;
}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-3">Valorant</h1>

      {modal}
      {children}
      <section className="flex w-full py-3 gap-4">
        <div className="bg-red-200 w-full p-3">{agents}</div>
        <div className="bg-orange-200 w-full p-3">{weapons}</div>
      </section>
      <div id="modal-root" />
    </div>
  );
};

export default DashboardLayout;
