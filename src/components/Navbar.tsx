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
    <div className="py-3 px-20 flex justify-between max-md:flex-col gap-3 max-md:justify-center max-md:items-center">
      <h1 className="text-4xl font-bold max-md:text-3xl tracking-tight max-md:text-center">Organise Your Learning </h1>
      <PrimaryButton title="Add Note" onClick={handleClick} type="button" />
      <TitleModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Navbar;
