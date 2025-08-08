import React from 'react';

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBoxComponent: React.FC<CheckBoxProps> = ({
  checked,
  onChange,
  ...props
}) => {
  return (
    <input
      type='checkbox'
      checked={checked}
      onChange={onChange}
      className='w-4 h-4'
      {...props}
    />
  );
};

export default CheckBoxComponent;
