import { createSlice,PayloadAction } from "@reduxjs/toolkit";
interface topic{
    name:string,
    description:string,
    statuse:string
}

interface note{
    title:string
    topics:topic[]
}
interface noteState{
    notes:note[]
}
const initialState:noteState={notes:[]}
 export const NoteSlice=createSlice({
    name:'notetrack',
    initialState,
    reducers:{
        addNote:(state,action:PayloadAction<note>)=>{
            state.notes.push(action.payload)

        },
        addTopic:(state,action:PayloadAction<{noteIndex:number;topic:topic}>)=>{
            const {noteIndex,topic}=action.payload
            if(state.notes[noteIndex]){
                state.notes[noteIndex].topics.push(topic)
            }
        },
        deleteTopic:(state,action:PayloadAction<{noteIndex:number,topicIndex:number}>)=>{
            const {noteIndex,topicIndex}=action.payload
            if(state.notes[noteIndex]){
                state.notes[noteIndex].topics.splice(topicIndex,1)
            }

        },
        editStatus:(state,action:PayloadAction<{noteIndex:number,topicIndex:number,newStatus:string}>)=>{
            const {noteIndex,topicIndex,newStatus}=action.payload
            if(state.notes[noteIndex]&&state.notes[noteIndex].topics[topicIndex]){
                state.notes[noteIndex].topics[topicIndex].statuse=newStatus

            }
        }

    }
})
export const {addNote,addTopic,deleteTopic,editStatus}=NoteSlice.actions
export default NoteSlice.reducer