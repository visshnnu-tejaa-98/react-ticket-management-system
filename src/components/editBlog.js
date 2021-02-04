import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
const EditBlog = (data) => {
	const { id } = useParams();
	const [name, setName] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [process, setProcess] = useState(true);
	let ticket = { name, title, description };
	const handleAddTicket = () => {
		let url = `http://localhost:8000/tickets/${id}`;
		// let ticket = { name, title, description };
		const getData = async (url) => {
			try {
				let apiResponse = await fetch(url);
				let apiData = await apiResponse.json();

				setName(apiData.name);
				setTitle(apiData.title);
				setDescription(apiData.description);
				setProcess(false);
			} catch (error) {
				console.log(error);
			}
		};
		getData(url);
	};
	process && handleAddTicket();
	// process ? console.log(ticket) : console.log(ticket);
	const handleEdit2 = () => {
		let updatedTicket = { name, title, description, id };
		let url = `http://localhost:8000/tickets/${id}`;
		const getData = async (url) => {
			try {
				let apiResponse = await fetch(url, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(updatedTicket),
				});
				let apiData = await apiResponse.json();

				setName(apiData.name);
				setTitle(apiData.title);
				setDescription(apiData.description);
				setProcess(false);
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
			<Link to='/' className='btn new-blog' onClick={() => handleEdit2(id)}>
				Edit Ticket
			</Link>
		</div>
	);
};

export default EditBlog;
