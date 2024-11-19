import React, { useState } from "react";
import plus from "../assets/icons/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/NoteStore.ts";
import Topic from "./Topic.tsx";
import TopicModal from "./Modals/TopicModal.tsx";
import trash from "../assets/icons/trash.svg";
import {
  NoteCardStyle,
  NoteContainerStyle,
  NoteIconStyle,
} from "./style/Note/NoteStyle.tsx";
import { deleteNote } from "../features/NoteSlice.ts";
const NoteContainer: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState<number | null>(
    null
  );

  const handleOpen = (index: number) => {
    setSelectedNoteIndex(index);
    setIsOpen(true);
  };
  const handleDelete = (index: number) => {
    dispatch(deleteNote({ noteIndex: index }));
  };
  return (
    <div className={NoteContainerStyle}>
      {notes.map((item, noteIndex) => (
        <div className={NoteCardStyle} key={noteIndex}>
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <div className="flex gap-2 justify-center items-center">
              <img
                src={plus}
                alt="Add Topic"
                width={28}
                className={NoteIconStyle}
                onClick={() => handleOpen(noteIndex)}
              />
              <img
                src={trash}
                alt=""
                width={25}
                onClick={() => handleDelete(noteIndex)}
                className={NoteIconStyle}
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
