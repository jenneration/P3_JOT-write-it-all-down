import React from "react";
import { Container } from "../components/Grid/grid";
import Search from "../components/Search";
// import Table2 from "../components/Table2"
import Table from "../components/Table";
import TableData from "../components/TableData";
import quotes from "../../src/testdb/quotes.json"


class Quotes extends React.Component {
    state = {
        quotes
    }

    //Delete a quote
    remove = id => {
        const quotes = this.state.quotes.filter(quote => quote.id !== id);
        this.setState({ quotes });
    }

    render() {
        return (
            <Container>
                <Search />
                <Table
                    theader1="Quote"
                    theader2="Author">
                    {this.state.quotes.map(quote => (
                        <TableData
                            key={quote.id}
                            data1={quote.title}
                            data2={quote.author}
                            // remove not working when table broken down
                            remove={this.remove}
                        />
                    ))}
                </Table>
                {/* <Table2 /> */}
            </Container>
        )
    }
}

export default Quotes;

//NOTE 1: Can pull in data from testdb > quotes.json file
//NOTE: 2 Table2/the pink talbe may be deleled if we can't figure out how to use it.
//NOTE: 3 Grey-wht-blk table is simple bootstrap and requires sorting-search functionality