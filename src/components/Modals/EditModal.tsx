import React, { useContext, useState } from 'react';
import ReactModal from 'react-modal';
import PrimaryButton from '../Button/PrimaryButton';
import { useDispatch, useSelector } from 'react-redux';
import { editStatus } from '../../features/NoteSlice';
import { InputStyle } from '../style/Input/Inputstyle';
import { label, subheading } from '../style/Headings/Headings';
import { modalLayout } from '../style/Modal/ModalStyle';
import { TopicContext, TopicContextType } from '../../context/TopicContext';
import Input from '../Input';
import { RootState } from '../../redux/NoteStore';

interface Props{
    isOpen:boolean
    onClose:()=>void
   noteIndex:number
   topicIndex:number

}

const EditModal: React.FC<Props> = ({isOpen,onClose,noteIndex,topicIndex}) => {
  const context=useContext(TopicContext)
  const topic=useSelector((state:RootState)=>state.notes.notes[noteIndex].topics[topicIndex])
  const {title,setTitle,description,setDescription}=context as TopicContextType
  const dispatch=useDispatch()
const handleSubmit=(noteIndex:number,topicIndex:number,status:string)=>{
  
  dispatch(editStatus({noteIndex:noteIndex,topicIndex:topicIndex,newStatus:status,newTitle:title,newDescription:description}))
  alert('edited successfully')
  onClose()


}
    const [status,setStatus]=useState('')
    
  return <ReactModal isOpen={isOpen} onRequestClose={onClose} className='modal-content' overlayClassName='modal-overlay'>
    <div className={modalLayout}>
      <h2 className={subheading}>Enter Your Progress</h2>
      <div className="">
        <h2>title</h2>
        <Input title={topic.name} onchange={(e)=>setTitle(e.target.value)} />
      </div>
      <div className="">
        <h2>description</h2>
        <Input title={topic.description} onchange={(e)=>setDescription(e.target.value)}/>
      </div>
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