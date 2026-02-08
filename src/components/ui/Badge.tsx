import { ReactNode } from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: ReactNode;
  tone?: 'neutral' | 'success' | 'warning';
}

const Badge = ({ children, tone = 'neutral' }: BadgeProps) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        {
          'bg-white/10 text-white': tone === 'neutral',
          'bg-emerald-500/20 text-emerald-200': tone === 'success',
          'bg-amber-500/20 text-amber-200': tone === 'warning',
        }
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
