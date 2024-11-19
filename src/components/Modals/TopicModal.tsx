import React, { useState } from 'react';
import ReactModal from 'react-modal';
import PrimaryButton from '../PrimaryButton';
import Input from '../Input';
import { useDispatch } from 'react-redux';
import { addTopic } from '../../features/NoteSlice';

interface Props {
  isOpen: boolean;
  handleClose:()=>void
  index:number
}

const TopicModal: React.FC<Props> = ({ isOpen,handleClose,index }) => {
    const dispatch=useDispatch()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
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
        handleClose()
      };

  return  <ReactModal
  isOpen={isOpen}
  onRequestClose={handleClose}
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
        placeholder='Performance Fundamentals'
      />
    </div>
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="">Description</label>
      <textarea
        placeholder="What is web performance?
How web performance affects user experience
Measuring performance (using tools like Lighthouse, Web Vitals, etc.)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-3 rounded-3xl border w-full scrollbar-hide" minLength={30}
        required
      />
    </div>
    <PrimaryButton
      title="Submit"
      type='button'
      onClick={()=>handleSubmit(index)}
    />
  </div>
</ReactModal>;
};

export default TopicModal;