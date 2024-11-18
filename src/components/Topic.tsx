import React, { useState } from 'react';
import arrowhead_down from '../assets/icons/arrowhead_down.svg'
import arrowhead_up from '../assets/icons/arrowhead_up.svg'

interface Props {
  name: string;
  description:string;
  status:string
  index:number
}

const Topic: React.FC<Props> = ({name,description,status,index }) => {
    const [isShown,setIsShown]=useState(false)

  return <div className="flex flex-col p-4  m-1 bg-lightgreen/40">
  <div className="flex items-center justify-between">
  <h3 className='text-lg '>{name}</h3>
  <img src={isShown?arrowhead_up:arrowhead_down} alt="" className='cursor-pointer duration-300 transform transition-transform '  key={index} onClick={()=>{setIsShown(!isShown)}}  width={25} />
  </div>
  <p className={`${isShown?'hidden max-h-0 opacity-100':'block max-h-[500px] opacity-0'} transform transition-transform duration-200`}>{description}</p>
  <p className='text-xsm tracking-tight'>{status}</p>
</div>;
};

export default Topic;