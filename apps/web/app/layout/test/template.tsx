import React, { ReactNode } from 'react';

const TestTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      Test Template
      <section className="p-3 m-3">{children}</section>
    </section>
  );
};

export default TestTemplate;
