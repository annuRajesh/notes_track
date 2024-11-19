import React, { useState } from "react";
import ReactModal from "react-modal";
import Input from "../Input";
import PrimaryButton from "../Button/PrimaryButton";
import { useDispatch } from "react-redux";
import { addNote } from "../../features/NoteSlice";
import { label, subheading } from "../style/Headings/Headings";
import { modalLayout } from "../style/Modal/ModalStyle";
import { FormStyle } from "../style/Form/FormStyle";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
}

const TitleModal: React.FC<Props> = ({ isModalOpen, closeModal }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const addContainer = (note: string) => {
    dispatch(addNote({ title: note, topics: [] }));
    setTitle("");
    closeModal();
  };

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <form
        action=""
        onSubmit={() => addContainer(title)}
        className={FormStyle}
      >
        <h3 className={subheading}>Your Target Area</h3>
        <div className={modalLayout}>
          <label htmlFor="" className={label}>
            Title
          </label>
          <Input
            title={title}
            onchange={(e) => setTitle(e.target.value)}
            placeholder="Web Performance Optimization"
          />
        </div>
        <PrimaryButton title="Submit" onClick={() => {}} type="submit" />
      </form>
    </ReactModal>
  );
};

export default TitleModal;
