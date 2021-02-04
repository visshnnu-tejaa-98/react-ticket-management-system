import NewTicketPage from './components/newTicketPage';
import { Link } from 'react-router-dom';

const NewTicket = () => {
	return (
		<div className='new-ticket d-flex justify-content-between mx-5 mb-3'>
			<h2>All Tickets</h2>

			<Link to='/create' className='btn new-blog'>
				New Blog
			</Link>
		</div>
	);
};

export default NewTicket;
