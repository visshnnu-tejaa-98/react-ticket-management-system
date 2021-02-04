import { useState } from 'react';
import { Link } from 'react-router-dom';
const NewTicketPage = ({ tickets, setTickets }) => {
	const [name, setName] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const handleAddTicket = () => {
		let url = `http://localhost:8000/tickets`;
		let ticket = { name, title, description };
		const getData = async (url) => {
			try {
				let apiResponse = await fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(ticket),
				});
				setTickets(tickets);
				console.log(tickets);
			} catch (error) {
				console.log(error);
			}
		};
		getData(url);
	};
	return (
		<div className='new-ticket-page 	'>
			<h1 className='text-center'>Creat New Ticket</h1>
			<form action=''>
				<div className='form-group'>
					<label htmlFor='name'>Your Name:</label>
					<input
						type='text'
						className='form-control'
						id='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					></input>
				</div>
				<div className='form-group'>
					<label htmlFor='title'>Title:</label>
					<input
						type='text'
						className='form-control'
						id='title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					></input>
				</div>
				<div className='form-group'>
					<label htmlFor='description'>Description:</label>
					<textarea
						className='form-control'
						name=''
						id='description'
						cols='30'
						rows='5'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						requried='true'
					></textarea>
				</div>
			</form>
			<Link to='/' className='btn new-blog' onClick={handleAddTicket}>
				Add Ticket
			</Link>
		</div>
	);
};

export default NewTicketPage;
