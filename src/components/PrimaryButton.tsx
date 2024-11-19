import React from 'react';

interface Props {
  title: string;
  onClick:(e:React.MouseEvent<HTMLButtonElement>)=>void
  type: "button" | "submit" | "reset";
}

const PrimaryButton: React.FC<Props> = ({ title ,onClick,type}) => {
  return <button onClick={onClick} className='px-4 py-1 shadow-xl  bg-secondary font-semibold text-lg text-white w-72 max-md:w-56' type={type}>{title}</button>;
};

export default PrimaryButton;