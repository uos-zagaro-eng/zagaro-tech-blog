import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type Props = ComponentPropsWithoutRef<'a'>;

export const TagBadge = forwardRef<HTMLAnchorElement, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <a ref={ref} className={cn('badge', className)} {...props}>
        {children}
      </a>
    );
  }
);

TagBadge.displayName = 'TagBadge';
