// import React from 'react';
// import ReactModal from 'react-modal';

// interface Props {
//   title: string;
// }

// const TopicModal: React.FC<Props> = ({ title }) => {
//   return  <ReactModal
//   isOpen={isOpen}
//   onRequestClose={() => setIsOpen(!isOpen)}
//   className="modal-content"
//   overlayClassName="modal-overlay backdrop-blur-md "
// >
//   <div className="flex flex-col gap-3 justify-center items-center w-full">
//     <h1 className="text-2xl font-bold ">Add A Topic To learn</h1>
//     <div className="flex flex-col w-full">
//       <label htmlFor="title" className="m-1">
//         Title
//       </label>
//       <Input
//         title={title}
//         onchange={(e) => setTitle(e.target.value)}
//       />
//     </div>
//     <div className="flex flex-col gap-2 w-full">
//       <label htmlFor="">Description</label>
//       <textarea
//         placeholder="learn all the datatypes with example"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         className="p-3 rounded-3xl border w-full"
//         required
//       />
//     </div>
//     <PrimaryButton
//       title="Submit"
//       onClick={() => handleSubmit(topicIndex)}
//     />
//   </div>
// </ReactModal>;
// };

// export default TopicModal;