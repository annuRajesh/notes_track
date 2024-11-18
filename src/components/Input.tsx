import React from 'react';

interface Props {
  title: string;
  onchange:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ title,onchange }) => {
  return       <input id='title' type="text" placeholder='datatypes of typescript' value={title} onChange={onchange}  className='border p-3 rounded-3xl ' required/>
  ;
};

export default Input;