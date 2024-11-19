import React, { useState } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import TitleModal from "../Modals/TitleModal";
import { NavbarStyle } from "../style/Navbar/NavbarStyle";
import { titleStyle } from "../style/Headings/Headings";

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className={NavbarStyle}>
      <h1 className={titleStyle}>Organise Your Learning </h1>
      <PrimaryButton title="Add Note" onClick={handleClick} type="button" />
      <TitleModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Navbar;
