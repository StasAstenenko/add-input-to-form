import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <input
        type='text'
        ref={ref}
        className='border px-3 py-2 rounded w-full'
        {...props}
      />
    );
  }
);

InputComponent.displayName = 'InputComponent';
export default InputComponent;
