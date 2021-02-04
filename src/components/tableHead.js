import { Link } from 'react-router-dom';
const TableHead = ({ tickets, setTickets }) => {
	const handleDelete = (index) => {
		let url = `http://localhost:8000/tickets/${index}`;
		const getData = async (url) => {
			try {
				let apiResponse = await fetch(url, {
					method: 'DELETE',
				});
				setTickets(tickets.filter((idx) => idx !== index));
			} catch (error) {
				console.log(error);
			}
		};
		getData(url);
	};

	return (
		<div className='mx-3'>
			<table className='table table-striped'>
				<thead className='text-light bg-dark'>
					<tr>
						<th scope='col'>T No.</th>
						<th scope='col'>Name</th>
						<th scope='col'>Title</th>
						<th scope='col'>Description</th>
						<th scope='col'></th>
						<th scope='col'></th>
					</tr>
				</thead>
				<tbody>
					{tickets &&
						tickets.map((ticket) => (
							<tr className='table-body' key={ticket.id}>
								<th scope='row'>{ticket.id}</th>
								<td>{ticket.name}</td>
								<td className='table-title'>
									{ticket && ticket.title.split('').length < 30
										? ticket.title
										: ticket.title.slice(0, 30) + '...'}
								</td>
								<td className='table-description'>
									{ticket && ticket.description.split('').length < 60
										? ticket.description
										: ticket.description.slice(0, 60) + '...'}
								</td>

								<td>
									<Link to={`/tickets/${ticket.id}`}>Details</Link>
								</td>

								<td className='d-flex-justify-content-end'>
									<Link
										to={`/edit/${ticket.id}`}
										className='icon btn'
										// onClick={() => console.log(ticket.name, ticket.title, ticket.description)}
										data={{
											name: ticket.name,
											title: ticket.title,
											description: ticket.description,
										}}
									>
										<i className='fas fa-pencil-alt text-warning '></i>
									</Link>
									<button className='icon' onClick={() => handleDelete(ticket.id)}>
										<i className='fas fa-trash-alt text-danger '></i>
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default TableHead;
