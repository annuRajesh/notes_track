import React from 'react';
import Navbar from './components/Navbar';
import NoteContainer from './components/NoteContainer';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';



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