import React from 'react';
import Navbar from './components/Navbar/Navbar';
import NoteContainer from './components/NoteContainer';
import ReactModal from 'react-modal';
import { NoteProvider } from './provider/NoteProvider';
ReactModal.setAppElement('#root');
const App: React.FC= () => {
  return <div>
    <header>
    <Navbar/>
    </header>
   <section className='px-5 py-8 w-full justify-center items-center'>
    <NoteProvider>
   <NoteContainer/>
   </NoteProvider>
   </section>
  </div>;
};

export default App;