import React, { useState } from "react";
import arrowhead_down from "../assets/icons/arrowhead_down.svg";
import arrowhead_up from "../assets/icons/arrowhead_up.svg";
import Delete from '../assets/icons/delete.svg'
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { deleteTopic } from "../features/NoteSlice";
interface Props {
  name: string;
  description: string;
  status: string;
  index: number;
  noteIndex:number

}


const Topic: React.FC<Props> = ({ name, description, status, index , noteIndex}) => {
    const dispatch=useDispatch()
const handleDelete=(note:number,topic:number)=>{
    dispatch(deleteTopic({noteIndex:note,topicIndex:topic}))
}
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="flex flex-col p-4  m-1 bg-lightgreen/40 bg-blend-soft-light">
      <div className="flex items-center justify-between">
        <h3 className="text-lg ">{name}</h3>
       <div className="flex gap-2">
       <img src={Delete} alt="" width={25} onClick={()=>handleDelete(index,noteIndex)} className="text-red-700 cursor-pointer"/>
        <img
          src={isShown ? arrowhead_up : arrowhead_down}
          alt=""
          className="cursor-pointer duration-300 transform transition-transform "
          key={index}
          onClick={() => {
            setIsShown(!isShown);
          }}
          width={25}
        />
       </div>
      </div>
      <motion.p
        initial={{ opacity: 0, maxHeight: 0 }}
        animate={{ opacity: isShown ? 1 : 0, maxHeight: isShown ? "500px" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={` transform transition-transform duration-200`}
      >
        {description}
      </motion.p>
      <p className="text-xsm tracking-tight text-red-600">{status}</p>
    </div>
  );
};

export default Topic;
