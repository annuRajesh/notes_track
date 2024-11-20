import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface topic {
  name: string;
  description: string;
  statuse: string;
}

interface note {
  title: string;
  topics: topic[];
}
interface noteState {
  notes: note[];
}
const initialState: noteState = { notes: [] };
export const NoteSlice = createSlice({
  name: "notetrack",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<note>) => {
      state.notes.push(action.payload);
    },
    addTopic: (
      state,
      action: PayloadAction<{ noteIndex: number; topic: topic }>
    ) => {
      const { noteIndex, topic } = action.payload;
      if (state.notes[noteIndex]) {
        console.log(noteIndex);
        state.notes[noteIndex].topics.push(topic);
        console.log(state.notes[noteIndex].topics);
      }
    },
    deleteTopic: (
      state,
      action: PayloadAction<{ noteIndex: number; topicIndex: number }>
    ) => {
      const { noteIndex, topicIndex } = action.payload;
      if (state.notes[noteIndex]) {
        state.notes[noteIndex].topics.splice(topicIndex, 1);
      }
    },
    editStatus: (
      state,
      action: PayloadAction<{
        noteIndex: number;
        topicIndex: number;
        newStatus: string;
        newTitle?: string;
        newDescription?: string;
      }>
    ) => {
      const { noteIndex, topicIndex, newStatus, newTitle, newDescription } =
        action.payload;
      if (state.notes[noteIndex]) {
        if (state.notes[noteIndex].topics[topicIndex]) {
          const topic = state.notes[noteIndex].topics[topicIndex];

          if (newTitle ) topic.name = newTitle;
          if (newDescription ) topic.description = newDescription;

          if(newStatus)state.notes[noteIndex].topics[topicIndex].statuse = newStatus;
        }
      }
    },
    deleteNote: (state, action: PayloadAction<{ noteIndex: number }>) => {
      const { noteIndex } = action.payload;
      if (state.notes[noteIndex]) {
        state.notes.splice(noteIndex, 1);
      }
    },
  },
});
export const { addNote, addTopic, deleteTopic, editStatus, deleteNote } =
  NoteSlice.actions;
export default NoteSlice.reducer;
