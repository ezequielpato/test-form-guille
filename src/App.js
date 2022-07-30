import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

export default function App() {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div className='App'>
			<h1>Formulario con Guille</h1>
			<button
				className='openModalBtn'
				onClick={() => {
					setModalOpen(true);
				}}
			>
				Click me to open modal form
			</button>
			{modalOpen && <Modal setOpenModal={setModalOpen} />}
		</div>
	);
}
