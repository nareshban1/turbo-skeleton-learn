import Link from 'next/link';

const Test = () => {
  return (
    <div className="bg-green-300 p-3">
      Test Page
      <Link href={'/layout'} className="p-1 ml-3 bg-slate-400 rounded-sm">
        Go Back
      </Link>
    </div>
  );
};

export default Test;
