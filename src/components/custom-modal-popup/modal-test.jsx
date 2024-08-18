import { useState } from 'react';
import Modal from './modal';
import './modal.css';

export default function Modaltest() {
  const [showModalPopup, setModalPopup] = useState(false);

  function handleTogglePopup() {
    setModalPopup(!showModalPopup);
  }

  function onClose() {
    setModalPopup(false);
  }

  return (
    <div className='modal-container'>
      <button onClick={handleTogglePopup}>Open Modal Popup</button>
      {showModalPopup && <Modal
      id={'custom-id'}
      header={<h1>Customized Header</h1>} 
      footer={<h1>Customized Footer</h1>} 
      onClose={onClose} 
      body={<div>Customized body</div>} 
      />}
    </div>
  );
}
