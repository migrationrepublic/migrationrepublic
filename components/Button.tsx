import React from 'react';
import Link from 'next/link';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'accent' | 'outline';
  href?: string;
};

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  href,
  onClick,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg text-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  let variantClasses = "";
  if (variant === 'primary') {
    variantClasses = "bg-[#012269] text-white hover:bg-blue-900";
  } else if (variant === 'accent') {
    variantClasses = "bg-[#E40229] text-white hover:bg-red-700";
  } else if (variant === 'outline') {
    variantClasses = "border-2 border-[#012269] text-[#012269] bg-transparent hover:bg-blue-50";
  }
  
  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
