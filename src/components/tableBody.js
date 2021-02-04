const TableBody = ({ ticket, setTickets }) => {
	const handleDelete = (index) => {
		let url = `http://localhost:8000/tickets/${index}`;
		const getData = async (url) => {
			let apiResponse = await fetch(url);
			let apiData = await apiResponse.json();
			console.log(apiData);
			setTickets(apiData);
		};
		getData(url);
	};
	return (
		<tr className='table-body' key={ticket.id}>
			<th scope='row'>{ticket.id}</th>
			<td>{ticket.name}</td>
			<td>{ticket.title}</td>
			<td className='d-flex-justify-content-end'>
				<button className='icon '>
					<i className='fas fa-pencil-alt text-warning '></i>
				</button>
				<button className='icon' onClick={() => handleDelete(ticket.id)}>
					<i className='fas fa-trash-alt text-danger '></i>
				</button>
			</td>
		</tr>
	);
};

export default TableBody;
