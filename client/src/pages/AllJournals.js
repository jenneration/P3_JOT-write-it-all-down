import React, { Component } from 'react';
import Card from '../components/Card/card';
import Create from '../components/Create';
import { Container } from '../components/Grid/grid';
import Wrapper from "../components/Wrapper/wrapper";

//TEST JSON FILE
import user from "../user.json";

class AllJournals extends Component {
    state = {
        user

    };

    render() {
        return (

            <Container>
                <Create id={this.state.user.id}
                    name={this.state.user.firstName} />
                {this.state.user.map((user) => user.journals.map((journal) =>
                    <Card id={journal.journal_id} title={journal.name} />)
                )}
            </Container>

        )
    }

}

export default AllJournals;
