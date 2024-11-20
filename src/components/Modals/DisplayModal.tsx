import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/NoteStore';
import ReactModal from 'react-modal';
import PrimaryButton from '../Button/PrimaryButton';
import { editStatus } from '../../features/NoteSlice';
import { label, subheading } from '../style/Headings/Headings';
import { modalLayout } from '../style/Modal/ModalStyle';
import { InputStyle } from '../style/Input/Inputstyle';
import { PrimaryStyle } from '../style/Button/PrimaryButtonStyle';

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
    
      if (!topic) {
        return (
          <ReactModal isOpen={isOpen} onRequestClose={onClose} className="modal-content" overlayClassName="modal-overlay">
            <h3 className={subheading}>Topic Not Found</h3>
            <p className="text-lg">The topic you are trying to access does not exist.</p>
            <button onClick={onClose} className={PrimaryStyle}>Close</button>
          </ReactModal>
        );
      }
      
  return <ReactModal isOpen={isOpen} onRequestClose={onClose} className='modal-content' overlayClassName='modal-overlay'>
    <div className={modalLayout}>
    <h3 className={subheading}>{topic.name}</h3>
    <p className='text-lg text-center'>{topic.description}</p>
    <label htmlFor="" className={label}>Status</label>
        <select name="" id="" value={status} onChange={(e)=>setStatus(e.target.value)} className={InputStyle}>
            <option value="pending">pending</option>
            <option value="ongoing">ongoing</option>
            <option value="completed">completed</option>
        </select>
    <PrimaryButton title='submit' type='button' onClick={()=>handleSubmit(noteIndex,topicIndex,status)}/>
    </div>

  </ReactModal>;
};

export default DisplayModal;