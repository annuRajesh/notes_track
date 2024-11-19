import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import TitleModal from "./Modals/TitleModal";

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="py-3 px-20 flex justify-between">
      <h1 className="text-4xl font-bold">Notes Track</h1>
      <PrimaryButton title="Add Note" onClick={handleClick} type="button" />
      <TitleModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Navbar;
