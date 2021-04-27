import React, { useMemo, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Table from "../components/Table/table";
import StateManager from "react-select";

function AllEntries() {
  const [state, setState] = useState({
    journalId: "",
    userId: "",
    token: "",
    results: []
  })
  const { id } = useParams()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setState(prevState => ({
      ...prevState,
      userId: user.id,
      token: user.token,
      name: user.name,
      journalId: id
    }))
    const apiUrl = "http://localhost:3001/article/"
    const authAxios = axios.create({
      baseURL: apiUrl,
      headers: {
        Authorization: `Bearer ${user.token}`,
        userId: user.id
      }
    })
    authAxios.get(`get/${id}`)
      .then(result => {
        console.log(result.data.Article);
        if (result.data.Article) {
          setState(prevState => ({
            ...prevState,
            results: result.data.Article
          }))
        }

      })
      .catch(error => console.log(error))
  }, [])

  const deleteEntry = (e) => {
    const delid = e.target.getAttribute('id');
    console.log(delid);
    const apiUrl = "http://localhost:3001/article/"
    const authAxios = axios.create({
      baseURL: apiUrl,
      headers: {
        Authorization: `Bearer ${state.token} `,
        userId: state.userId,
        journalId: id
      }
    })
    authAxios.delete(`delete/${delid}`)
      .then(res => console.log(res))
      .catch(error => console.log(error));

  }


  const columns = useMemo(
    () => [
      {
        Header: "Journal Entries",
        columns: [
          {
            Header: () => (
              <div style={{ textAlign: "left" }}>Title</div>
            ),

            accessor: "title",
            Cell: row => (
              <div style={{ textAlign: "left" }}>{row.value}</div>
            )
          },
          {
            Header: "Date",
            accessor: "createAt"
          }
        ]
      },
      {
        Header: "Delete Entry",
        columns:
          [
            {
              Header: "X",

              accessor: "_id",
              disableSortBy: true,
              disableFilters: true,
              // ***** A-1 KEEP BY COMMENTING THIS OUT ID CAN BE SEEN UNDER "X"
              // Cell: cell => 
              // <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "none" }} >
              //  < button className="btn btnX" value="X" >X</button ></ div >
              // )





              // *** DELETE? THIS WAS COMMENTED OUT BY ARJUN
              //   // <button value={cell.accessor} onClick={props.handleClickGroup}>
              //   //     {cell.accessor}
              //   // </button>
            }
          ]
      }
    ],
    []
  );



  //Render
  return (
    <div className="container tableApp">

      <Table
        columns={columns}
        data={state.results} />

    </div>

  );
}

export default AllEntries;
