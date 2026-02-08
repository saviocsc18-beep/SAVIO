import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500',
        {
          'bg-red-600 text-white hover:bg-red-500': variant === 'primary',
          'bg-white/10 text-white hover:bg-white/20': variant === 'secondary',
          'bg-transparent text-white hover:bg-white/10': variant === 'ghost',
        },
        className
      )}
      {...props}
    />
  );
};

export default Button;
