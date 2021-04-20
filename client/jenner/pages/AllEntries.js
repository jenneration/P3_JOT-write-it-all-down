import React, { Component } from "react";
import { Container } from "../components/Grid/grid";
import Search from "../components/Search/search";

//TEST db file
import entries from "../testdb/entries.json"

class AllEntries extends Component {
  state = {
    entries
  }

  //Delete an entry 
  removeEntry = id => {
    const entries = this.state.entries.filter(entry => entry.article_id !== id);
    this.setState({ entries });
  }

  render() {
    return (
      <Container>
        <Search />
        <table className="table  text-center">
          <thead>
            <tr className="thead-light">
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.entries.map(entry => (
              <tr key={entry.article_id}>
                <td>{entry.title}</td>
                <td>{entry.date}</td>
                <td><span onClick={() => this.removeEntry(entry.id)} className="remove">X</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    )
  }
}

export default AllEntries;

//NOTE: Can pull in data from testdb > entries.json file
//NOTE: Current Table is simple bootstrap and requires sorting-search functionality - gui table exists in Quotes page. See notes about there about that
