import React from 'react';
import '../Components/Contact.css'
import Nav from './Navbar';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');
export default function ContactUs() {


  return (
    <div className='Contact'>
        <Nav/>
        <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
}