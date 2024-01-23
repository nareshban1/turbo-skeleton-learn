'use client';
import { Button } from '@repo/ui';
import React, { ReactNode } from 'react';

// layout should always accept children so that the page can be rendered with the layout
// layout are different from templates in that they persist state across routes
const Layout = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = React.useState(0);
  return (
    <section>
      Layout<span className="mx-3">{count}</span>
      <Button
        onClick={() => setCount(count + 1)}
        className="p-1 bg-slate-400 rounded-sm"
      >
        Change Count
      </Button>
      <span className="ml-3">
        Layout state are persisted across child routes
      </span>
      <section className="p-3 m-3 bg-red-300">{children}</section>
    </section>
  );
};

export default Layout;
