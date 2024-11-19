import React from 'react';
import Navbar from './components/Navbar/Navbar';
import NoteContainer from './components/NoteContaineStyler';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');
const App: React.FC= () => {
  return <div>
    <header>
    <Navbar/>
    </header>
   <section className='px-5 py-8 w-full justify-center items-center'>
   <NoteContainer/>
   </section>
  </div>;
};

export default App;