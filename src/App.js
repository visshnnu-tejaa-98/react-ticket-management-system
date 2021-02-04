import './App.css';
import Heading from './components/heading';
import TableHead from './components/tableHead';
import React, { useState, useEffect } from 'react';
import NewTicket from './newTicket';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewTicketPage from './components/newTicketPage';
import SingleTicket from './components/singleTicket';
import EditBlog from './components/editBlog';

function App() {
	const [tickets, setTickets] = useState(null);

	const getData = async (url) => {
		let apiResponse = await fetch(url);
		let apiData = await apiResponse.json();
		setTickets(apiData);
	};

	useEffect(() => {
		let url = `http://localhost:8000/tickets`;

		getData(url);
	});

	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path='/'>
						<Heading />
						<NewTicket />
						<TableHead tickets={tickets} setTickets={setTickets} />
					</Route>
					<Route exact path='/create'>
						<NewTicketPage tickets={tickets} setTickets={setTickets} />
					</Route>
					<Route exact path='/tickets/:id'>
						<SingleTicket />
					</Route>
					<Route exact path='/edit/:id'>
						<EditBlog />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
