import React, { useState } from 'react';
import ReactModal from 'react-modal';
import PrimaryButton from '../Button/PrimaryButton';
import { useDispatch } from 'react-redux';
import { editStatus } from '../../features/NoteSlice';
import { InputStyle } from '../style/Input/Inputstyle';
import { label, subheading } from '../style/Headings/Headings';
import { modalLayout } from '../style/Modal/ModalStyle';

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
    const [status,setStatus]=useState('')
  return <ReactModal isOpen={isOpen} onRequestClose={onClose} className='modal-content' overlayClassName='modal-overlay'>
    <div className={modalLayout}>
      <h2 className={subheading}>Enter Your Progress</h2>
        <label htmlFor="" className={label}>Status</label>
        <select name="" id="" value={status} onChange={(e)=>setStatus(e.target.value)} className={InputStyle}>
            <option value="pending">pending</option>
            <option value="ongoing">ongoing</option>
            <option value="completed">completed</option>
        </select>

        
    </div>
    <PrimaryButton title='Submit' type='button' onClick={()=>handleSubmit(noteIndex,topicIndex,status)}/>

  </ReactModal>;
};

export default EditModal