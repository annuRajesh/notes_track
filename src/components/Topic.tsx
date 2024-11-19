import React, { useState } from "react";
import arrowhead_down from "../assets/icons/arrowhead_down.svg";
import arrowhead_up from "../assets/icons/arrowhead_up.svg";
import Delete from "../assets/icons/trash.svg";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { deleteTopic } from "../features/NoteSlice";
import pen from "../assets/icons/pen.svg";
import EditModal from "./Modals/EditModal";
import DisplayModal from "./Modals/DisplayModal";
import ellipsis from '../assets/icons/ellipsis.svg'
import { subheading2 } from "./style/Headings/Headings";
import { TopicContainerStyle } from "./style/Topic/TopicStyle";
interface Props {
  name: string;
  description: string;
  status: string;
  noteIndex: number;
  topicIndex: number;
}
const Topic: React.FC<Props> = ({
  name,
  description,
  status,
  noteIndex,
  topicIndex,
}) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (note: number, topic: number) => {
    dispatch(deleteTopic({ noteIndex: note, topicIndex: topic }));
  };
  const [isShown, setIsShown] = useState(false);
  const statusColor: Record<string, string> = {
    pending: "text-red-600",
    ongoing: "text-yellow-600",
    completed: "text-green-600",
  };
const [isOpen,setIsOpen]=useState(false)
const onClose= ()=>setIsOpen(false)
  return (
    <div className={TopicContainerStyle}>
      <div className="flex items-center justify-between">
        <h3 className={subheading2}>{name}</h3>
        <div className="flex gap-2 max-lg:hidden">
          <img
            src={pen}
            alt=""
            width={25}
            onClick={() => setEdit(true)}
            className="cursor-pointer"
          />
          <img
            src={Delete}
            alt=""
            width={25}
            onClick={() => handleDelete(noteIndex, topicIndex)}
            className=" cursor-pointer"
          />
          <img
            src={isShown ? arrowhead_up : arrowhead_down}
            alt=""
            className="cursor-pointer  "
            key={noteIndex}
            onClick={() => {
              setIsShown(!isShown);
            }}
            width={25}
          />
        </div>
        <div className="hidden max-lg:block ">
          <img src={ellipsis} alt="" width={25} onClick={()=>setIsOpen(true)}/>
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
      <p
        className={`text-xsm tracking-tight ${statusColor[status]} font-semibold`}
      >
        {status}
      </p>
      <EditModal
        isOpen={edit}
        onClose={() => setEdit(false)}
        noteIndex={noteIndex}
        topicIndex={topicIndex}
      />
      <DisplayModal
        isOpen={isOpen}
        onClose={onClose}
        noteIndex={noteIndex}
        topicIndex={topicIndex}

      />
    </div>
  );
};

export default Topic;
