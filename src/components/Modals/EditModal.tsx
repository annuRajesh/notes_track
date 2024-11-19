import React, { useState } from 'react';
import ReactModal from 'react-modal';
import Input from '../Input';
import PrimaryButton from '../PrimaryButton';
import { useDispatch } from 'react-redux';
import { editStatus } from '../../features/NoteSlice';

interface Props{
    isOpen:boolean
    onClose:()=>void
   noteIndex:number
   topicIndex:number

}

const EditModal: React.FC<Props> = ({isOpen,onClose,noteIndex,topicIndex}) => {
  const dispatch=useDispatch()
const handleSubmit=(noteIndex:number,topicIndex:number,status:string)=>{
  dispatch(editStatus({noteIndex:noteIndex,topicIndex:topicIndex,newStatus:status}))
  alert('edited successfully')
  onClose()


}
    const [status,setStatus]=useState('pending')
  return <ReactModal isOpen={isOpen} onRequestClose={onClose} className='modal-content' overlayClassName='modal-overlay'>
    <div className="flex flex-col">
        <label htmlFor="" className='text-2xl font-semibold text-center'>Status</label>
        <select name="" id="" value={status} onChange={(e)=>setStatus(e.target.value)} className='p-2 outline-none border rounded-3xl text-center'>
            <option value="pending">pending</option>
            <option value="ongoing">ongoing</option>
            <option value="completed">completed</option>
        </select>

        
    </div>
    <PrimaryButton title='Submit' type='button' onClick={()=>handleSubmit(noteIndex,topicIndex,status)}/>

  </ReactModal>;
};

export default EditModal