import React, { createContext } from "react";

export interface TopicContextType {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

export const TopicContext = createContext<TopicContextType|null >(null);
