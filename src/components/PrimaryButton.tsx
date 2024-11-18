import React from 'react';

interface Props {
  title: string;
  onClick:(e:React.MouseEvent<HTMLButtonElement>)=>void
}

const PrimaryButton: React.FC<Props> = ({ title ,onClick}) => {
  return <button onClick={onClick} className='px-4 py-1 shadow-xl  bg-secondary font-semibold text-lg text-white w-72'>{title}</button>;
};

export default PrimaryButton;