import React, { ReactNode } from 'react';
import './optionLayout.css';

interface OptionLayoutProps {
  title: string;
  children: ReactNode;
}

const OptionLayout = ({ title, children }: OptionLayoutProps) => {
  return (
    <div className='option-layout-container'>
      <h4 className='option-layout-title'>{title}</h4>
      {children}
    </div>
  );
};

export default OptionLayout;
