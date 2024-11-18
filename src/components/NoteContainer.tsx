import React, { useState } from "react";

import plus from "../assets/icons/plus.svg";
import ellipsis from "../assets/icons/ellipsis.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/NoteStore";
import ReactModal from "react-modal";
import { addTopic } from "../features/NoteSlice";
import PrimaryButton from "./PrimaryButton";
import Input from "./Input";
import Topic from "./Topic";

const NoteContainer: React.FC = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes.notes);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [topicIndex, setTopicIndex] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (index: number) => {
    dispatch(
      addTopic({
        noteIndex: index,
        topic: { name: title, description: description, statuse: "pending" },
      })
    );
    console.log(title);
    setTitle("");
    setDescription("");
    setStatus("");
    setIsOpen(false);
  };
  const handleOpen = (index: number) => {
    setIsOpen(true);
    setTopicIndex(index);
  };

  return (
     <div className="grid grid-cols-3   justify-center w-full container mx-auto">
      {notes.map((item, index) => (
        <div
          className=" p-5 flex flex-col gap-6 border rounded-xl h-72 max-h-72 m-1"
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
              <img
                src={ellipsis}
                alt=""
                width={25}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="overflow-y-scroll scrollbar-hide">
            {item.topics.map((topic) => (
              <Topic
                name={topic.name}
                description={topic.description}
                status={"pending"}
                index={index}
              />
            ))}
            <ReactModal
              isOpen={isOpen}
              onRequestClose={() => setIsOpen(!isOpen)}
              className="modal-content"
              overlayClassName="modal-overlay backdrop-blur-md "
            >
              <div className="flex flex-col gap-3 justify-center items-center w-full">
                <h1 className="text-2xl font-bold ">Add A Topic To learn</h1>
                <div className="flex flex-col w-full">
                  <label htmlFor="title" className="m-1">
                    Title
                  </label>
                  <Input
                    title={title}
                    onchange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="">Description</label>
                  <textarea
                    placeholder="learn all the datatypes with example"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="p-3 rounded-3xl border w-full"
                    required
                  />
                </div>
                <PrimaryButton
                  title="Submit"
                  onClick={() => handleSubmit(topicIndex)}
                />
              </div>
            </ReactModal>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteContainer;
