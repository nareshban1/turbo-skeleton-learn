'use client';
import { Button } from '@repo/ui';
import React, { ReactNode } from 'react';

const LayoutTemplate = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      Template<span className="mx-3">{count}</span>
      <Button
        onClick={() => setCount(count + 1)}
        className="p-1 bg-slate-400 rounded-sm"
      >
        Change Count
      </Button>
      <section className="p-3 m-3 bg-orange-200">{children}</section>
    </div>
  );
};

export default LayoutTemplate;
