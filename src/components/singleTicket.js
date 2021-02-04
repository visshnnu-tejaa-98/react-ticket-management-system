import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

const SingleTicket = () => {
	const { id } = useParams();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [name, setName] = useState('');

	let url = `http://localhost:8000/tickets/${id}`;
	const getData = async (url) => {
		try {
			let apiResponse = await fetch(url);
			let apiData = await apiResponse.json();
			setTitle(apiData.title);
			setDescription(apiData.description);
			setName(apiData.name);
		} catch (error) {
			console.log(error);
		}
	};
	getData(url);
	return (
		<div className='container'>
			<h1 className='text-center mt-3'>Ticket Details</h1>
			<h2>{title}</h2>
			<small>by {name} </small>
			<p className='mt-3'>{description}</p>
			<Link to='/' className='new-blog btn'>
				Back
			</Link>
		</div>
	);
};

export default SingleTicket;
