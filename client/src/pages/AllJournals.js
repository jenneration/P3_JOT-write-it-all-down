import React, { Component } from 'react';
import Wrapper from "../components/Wrapper";
import Create from "../components/Create";
import Card from '../components/Card/card';


//TEST JSON FILE
import user from "../user.json";

class AllJournals extends Component {
    state = {
        user

    };

    render() {
        return (
            <Wrapper>
                <div className="container d-flex flex-wrap justify-content-center">
                    <Create id={this.state.user.id}
                        name={this.state.user.firstName} />
                    {this.state.user.map((user) => user.journals.map((journal) =>
                        <Card id={journal.journal_id} title={journal.name} />)
                    )}

                    {/* <Create id={this.state.user.id}
                        name={this.state.user.firstName} />
                        {this.state.user.map((user) => user.journals.map((journal) =>
                            <Card id={journal.journal_id} title={journal.name} />)
                        )} */}
                </div>
            </Wrapper>

        )
    }

}

export default AllJournals;
