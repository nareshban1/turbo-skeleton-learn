import { ReactNode } from 'react';

const Card = ({ children }: { children: ReactNode }) => {
  return <article>{children}</article>;
};

export default Card;
