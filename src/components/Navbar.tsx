import React, { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import { useDispatch } from 'react-redux';
import { addNote } from '../features/NoteSlice';
import ReactModal from 'react-modal'
import Input from './Input';


const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const dispatch=useDispatch()
  const addContainer=(note:string)=>{
    dispatch(addNote({title:note,topics:[]}))
    setNoteTitle('')
    setIsModalOpen(false)


  }
  const handleClick=()=>{
    setIsModalOpen(true)
  }
  const closeModal=()=>setIsModalOpen(false)
  return <div className='py-3 px-20 flex justify-between'>
    <h1 className='text-4xl font-bold'>Notes Track</h1>
    <PrimaryButton title='Add Note' onClick={handleClick} type='button'/>
    <ReactModal isOpen={isModalOpen} onRequestClose={closeModal} className='modal-content' overlayClassName='modal-overlay'>
      <form action="" onSubmit={()=>addContainer(noteTitle)} className='flex flex-col gap-4 '>
      <h3 className="text-3xl font-bold">Your Study Target</h3>
      <label htmlFor="">Title</label>
      <Input title={noteTitle} onchange={(e)=>setNoteTitle(e.target.value)} />
<PrimaryButton title='Submit' onClick={()=>{}} type='submit'/>
      </form>
    </ReactModal>
    

  </div>;
}

export default Navbar;
