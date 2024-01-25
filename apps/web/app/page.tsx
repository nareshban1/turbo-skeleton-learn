import Link from 'next/link';

const RootPage = async () => {
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // await delay(2000);
  return (
    <div className="flex gap-3">
      <Link href="/dashboard" className="bg-green-300 p-1">
        Go to parallel route test
      </Link>
      <Link href="/layout" className="bg-orange-300 p-1 ">
        Go to layout test
      </Link>
      <Link href="/sign-up" className="bg-red-300 p-1">
        Go to Sign Up
      </Link>
    </div>
  );
};

export default RootPage;
