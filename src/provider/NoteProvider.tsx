import React, { useState } from "react";
import { TopicContext } from "../context/TopicContext";

interface MyProviderProps {
  children: React.ReactNode;
}

export const NoteProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const value = { title, setTitle, description, setDescription };

  return (
    <TopicContext.Provider value={value}>{children}</TopicContext.Provider>
  );
};
