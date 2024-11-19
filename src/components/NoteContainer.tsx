import React, { useState } from "react";
import plus from "../assets/icons/plus.svg";
import { useSelector } from "react-redux";
import { RootState } from "../redux/NoteStore";
import Topic from "./Topic";
import TopicModal from "./Modals/TopicModal";

const NoteContainer: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setSelectedNoteIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="grid grid-cols-3 max-md:grid-cols-1 justify-center w-full container mx-auto">
      {notes.map((item, noteIndex) => (
        <div
          className="p-5 flex flex-col gap-6 border rounded-xl h-72 max-h-72 m-1 bg-primary shadow-md"
          key={noteIndex}
        >
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <div className="flex gap-2 justify-center items-center">
              <img
                src={plus}
                alt="Add Topic"
                width={28}
                className="cursor-pointer hover:bg-lightgreen bg-blend-soft-light p-1 rounded-md duration-300"
                onClick={() => handleOpen(noteIndex)}
              />
            </div>
          </div>
          <div className="overflow-y-scroll scrollbar-hide">
            {item.topics.map((topic, topicIndex) => (
              <Topic
                name={topic.name}
                description={topic.description}
                status={topic.statuse}
                noteIndex={noteIndex}
                topicIndex={topicIndex}
                key={topicIndex}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Render the TopicModal outside the loop */}
      {isOpen && selectedNoteIndex !== null && (
        <TopicModal
          isOpen={isOpen}
          handleClose={() => setIsOpen(false)}
          index={selectedNoteIndex}
        />
      )}
    </div>
  );
};

export default NoteContainer;
