import Link from 'next/link';
import React from 'react';

const Layout = () => {
  return (
    <section className="p-3">
      Page{' '}
      <Link href={'/layout/test'} className="p-1 bg-slate-400 rounded-sm">
        Test Page
      </Link>
    </section>
  );
};

export default Layout;
