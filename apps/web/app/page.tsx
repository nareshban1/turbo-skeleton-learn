import Link from 'next/link';

const page = () => {
  return (
    <section className="max-w-7xl p-2">
      <Link href={'layout'} className="bg-green-300 hover:bg-green-200 p-1">
        Layout Template Test{' '}
      </Link>
    </section>
  );
};

export default page;
