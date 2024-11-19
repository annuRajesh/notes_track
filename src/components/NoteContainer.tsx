import React, { useState } from "react";
import plus from "../assets/icons/plus.svg";
import { useSelector } from "react-redux";
import { RootState } from "../redux/NoteStore";
import Topic from "./Topic";
import TopicModal from "./Modals/TopicModal";

const NoteContainer: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  const [isOpen, setIsOpen] = useState(false);
  const [topicIndex, setTopicIndex] = useState(0);
console.log(topicIndex)
  const handleOpen = (index: number) => {
    setIsOpen(true);

    setTopicIndex(index);
  };
  return (
    <div className="grid grid-cols-3 max-md:grid-cols-1 justify-center w-full container mx-auto">
      {notes.map((item, index) => (
        <div
          className=" p-5 flex flex-col gap-6 border rounded-xl h-72 max-h-72 m-1 bg-primary shadow-md"
          key={index}
        >
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <div className="flex gap-2 justify-center items-center">
              <img
                src={plus}
                alt=""
                width={28}
                className="cursor-pointer hover:bg-lightgreen bg-blend-soft-light p-1 rounded-md duration-300 "
                onClick={() => handleOpen(index)}
              />
            </div>
          </div>
          <div className="overflow-y-scroll scrollbar-hide">
            {item.topics.map((topic, topicIndex) => (
              <Topic
                name={topic.name}
                description={topic.description}
                status={topic.statuse}
                noteIndex={topicIndex}
                topicIndex={index}
              />
            ))}
            <TopicModal
              isOpen={isOpen}
              handleClose={() => setIsOpen(false)}
              index={index}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default NoteContainer;
