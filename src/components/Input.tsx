import React from "react";
import { InputStyle } from "./style/Input/Inputstyle";

interface Props {
  title: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  defaultValue?:string
}

const Input: React.FC<Props> = ({ title, onchange, placeholder,}) => {
  return (
    <input
      id="title"
      type="text"
      placeholder={placeholder}
      defaultValue={title}
      onChange={onchange}
      className={InputStyle}
      required
     
      
    />
  );
};

export default Input;
