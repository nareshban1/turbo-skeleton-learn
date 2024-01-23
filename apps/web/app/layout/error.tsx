'use client';

import { Button } from '@repo/ui';
import React from 'react';

const LayoutErrorBoundary = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div>
      {error.message}
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};

export default LayoutErrorBoundary;
