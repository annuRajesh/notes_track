import React from 'react';

interface Props {
  title: string;
  onchange:(e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder:string
}

const Input: React.FC<Props> = ({ title,onchange,placeholder }) => {
  return       <input id='title' type="text" placeholder={placeholder} value={title} onChange={onchange}  className='border p-3 rounded-3xl max-md:m-3' required/>
  ;
};

export default Input;