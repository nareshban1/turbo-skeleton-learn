'use client';

import React from 'react';

const GlobalErrorBoundary = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  // should return its own html and body tags because it replaces the root layout
  return (
    <html lang="en">
      <body>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
};

export default GlobalErrorBoundary;
