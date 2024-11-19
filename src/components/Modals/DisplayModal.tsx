import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/NoteStore';
import ReactModal from 'react-modal';
import PrimaryButton from '../PrimaryButton';
import { editStatus } from '../../features/NoteSlice';

interface Props {
  noteIndex:number
  topicIndex:number
  isOpen:boolean
  onClose:()=>void
}

const DisplayModal: React.FC<Props> = ({ noteIndex,topicIndex,isOpen,onClose }) => {
    const dispatch=useDispatch()
    const handleSubmit=(noteIndex:number,topicIndex:number,status:string)=>{
      dispatch(editStatus({noteIndex:noteIndex,topicIndex:topicIndex,newStatus:status}))
      alert('edited successfully')
      onClose()
    
    
    }
        const [status,setStatus]=useState('pending')
    const topic=useSelector((state:RootState)=>state.notes.notes[noteIndex]?.topics[topicIndex])
  return <ReactModal isOpen={isOpen} onRequestClose={onClose} className='modal-content' overlayClassName='modal-overlay'>
    <h3 className='text-2xl font-bold'>{topic.name}</h3>
    <p className='text-lg'>{topic.description}</p>
    <label htmlFor="" className='text-xsm text-center'>Status</label>
        <select name="" id="" value={status} onChange={(e)=>setStatus(e.target.value)} className='p-2 outline-none border rounded-3xl text-center'>
            <option value="pending">pending</option>
            <option value="ongoing">ongoing</option>
            <option value="completed">completed</option>
        </select>
    <PrimaryButton title='submit' type='button' onClick={()=>handleSubmit(noteIndex,topicIndex,status)}/>

  </ReactModal>;
};

export default DisplayModal;