import React from 'react';
import { PrimaryStyle } from '../style/Button/PrimaryButtonStyle';

interface Props {
  title: string;
  onClick:(e:React.MouseEvent<HTMLButtonElement>)=>void
  type: "button" | "submit" | "reset";
}

const PrimaryButton: React.FC<Props> = ({ title ,onClick,type}) => {
  return <button onClick={onClick} className={PrimaryStyle} type={type}>{title}</button>;
};

export default PrimaryButton;