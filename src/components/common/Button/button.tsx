import React, { FC } from 'react';

const Button: FC<{
  filled?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  Image?: any;
}> = ({ filled, children, className, onClick, disabled, Image }) => {
  return (
      <button
          disabled={disabled}
          onClick={onClick}
          className={`rounded-2xl font-medium px-[2vw] py-[1vh] hover:bg-[#ffff6d9a] ${
              filled ? 'bg-[#F8F872]' : 'text-black'
          } text-black ${className}`}
      >
          {children}
      </button>
  );
};

export default Button;
