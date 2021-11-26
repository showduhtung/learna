import { Spinner } from 'components/loading';
import * as React from 'react';
import MuiButton from '@mui/material/Button';

export const Button = React.forwardRef(
  (
    {
      type = 'button',
      className = '',
      variant = 'outlined',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref,
  ) => {
    return (
      <MuiButton ref={ref} variant={variant} type={type} className={className} {...props}>
        {isLoading && <Spinner size="sm" className="text-current" />}
        {!isLoading && startIcon}
        <span>{props.children}</span> {!isLoading && endIcon}
      </MuiButton>
    );
  },
);
