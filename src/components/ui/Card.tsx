import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-white/10 bg-dark-card/80 p-6 shadow-lg shadow-black/30 backdrop-blur',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
