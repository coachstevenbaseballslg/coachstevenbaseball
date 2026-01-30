
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import { cn } from '@/lib/utils';

const MagneticButton = ({ className, children, ...props }) => {
  const buttonRef = useRef(null);
  
  useMagneticButton(buttonRef);

  return (
    <Button
      ref={buttonRef}
      className={cn(
        "transition-transform duration-500 ease-out will-change-transform min-h-[44px] min-w-[44px] touch-manipulation",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MagneticButton;
