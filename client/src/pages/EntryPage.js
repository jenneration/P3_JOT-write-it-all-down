
import React, { Component } from 'react';
import Entry from '../components/Entry';
import Wrapper from '../components/Wrapper/wrapper';
import SideNav from '../components/SideNav';
import QuoteHeader from "../components/QuoteHeader";
import Modal from "../components/Modal"
import Footer from "../components/Footer"
import './style.css';

import user from '../user.json';

class EntryPage extends Component {
	// Setting this.state.friends to the friends json array
	state = {

		user
	};

	render() {
		return (
			<Wrapper>
				<QuoteHeader />


				{this.state.user.map((user) => user.journals[0].article.map((article) =>
					<SideNav
						id={article.article_id} title={article.title}
					/>)
				)
				}

				<Entry />
				<Modal />
				<Footer />
				


			</Wrapper>
		);
	}
}

export default EntryPage;