import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type Props = ComponentPropsWithoutRef<'a'>;

export const TagBadge = ({ className, children, ...props }: Props) => {
  return (
    <a className={cn('badge', className)} {...props}>
      {children}
    </a>
  );
};
