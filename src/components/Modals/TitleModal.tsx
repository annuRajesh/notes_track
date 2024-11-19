import React, { useState } from 'react';
import ReactModal from 'react-modal';
import Input from '../Input';
import PrimaryButton from '../PrimaryButton';
import { useDispatch } from 'react-redux';
import { addNote } from '../../features/NoteSlice';

interface Props {
 
  isModalOpen:boolean
  closeModal:()=>void
}

const TitleModal: React.FC<Props> = ({ isModalOpen,closeModal }) => {
    const dispatch=useDispatch()
    const [title, setTitle] = useState("");
    const addContainer=(note:string)=>{
        dispatch(addNote({title:note,topics:[]}))
        setTitle('')
        closeModal()
    
    
      }

  return <ReactModal isOpen={isModalOpen} onRequestClose={closeModal} className='modal-content' overlayClassName='modal-overlay'>
  <form action="" onSubmit={()=>addContainer(title)} className='flex flex-col gap-4 justify-center items-center'>
  <h3 className="text-3xl font-bold max-md:text-2xl max-md:tracking-tight max-md:text-center">Your Target Area</h3>
  <div className="flex flex-col">
  <label htmlFor="" className='max-md:text-center'>Title</label>
  <Input title={title} onchange={(e)=>setTitle(e.target.value)} placeholder='Web Performance Optimization'/>
  </div>
<PrimaryButton title='Submit' onClick={()=>{}} type='submit'/>
  </form>
</ReactModal>;
};

export default TitleModal;