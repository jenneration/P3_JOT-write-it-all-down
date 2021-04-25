import React, { useMemo, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Table from "../components/Table/Table";
import StateManager from "react-select";

function AllEntries() {
  const [state, setState] = useState({
    journalId:"",
    userId:"",
    token:"",
    results :[]
  })
  const { id } = useParams()
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    setState(prevState => ({
      ...prevState,
      userId: user.id,
      token: user.token,
      name: user.name,
      journalId:id
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
    .then(result=>{
        console.log(result.data.Article);
        if(result.data.Article){
          setState(prevState => ({
            ...prevState,
            results: result.data.Article
        }))
        }
      
    })
    .catch(error => console.log(error))
  },[])

  const deleteEntry = (e)=>{
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
      .then(res=> console.log(res))
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

            accessor: "show.name",
            Cell: row => (
              <div style={{ textAlign: "left" }}>{row.value}</div>
            )
          },
          {
            Header: "Date",
            accessor: "show.id"
          }
        ]
      },
      {
        Header: "Delete Entry",
        columns:
          [
            {
              Header: "X",

              accessor: "X",
              disableSortBy: true,
              disableFilters: true,
              Cell: cell => (
                // <button value={cell.accessor} onClick={props.handleClickGroup}>
                //     {cell.accessor}
                // </button>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "none" }} >
                   <button className="btn btnX" value="X">X</button></ div >

              )
            }
          ]
      }
    ],
    []
  );

  //Call for data
  const [data, setData] = useState([]);

  //Example API call
  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      console.log(result)
      setData(result.data);
    })();
  }, []);


  //Render
  return (
    <div>
    {/* <div className="container tableApp">
      <Table columns={columns} data={data} />
      <div className="list-container">
        <h4>{entries.name}</h4>
      </div>
    </div> */}
      {state.results.length? (
        <ul>
          {state.results.map(result =>(
            <li key={result._id}>{result.title}
            <button id={result._id} className="btn btn-danger" onClick={deleteEntry}>delete</button>
            <p>{result.body}</p>
            </li>
            
          ))}
        </ul>
      ):(<p> no entries on this journal please add to view.</p>)}

    </div>

  );
}

export default AllEntries;
