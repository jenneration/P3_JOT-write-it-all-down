import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Table from "../components/Table";

function AllEntries() {
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

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "none" }} > <button className="btn btnX" value="X">X</button></ div >

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

    <div className="container tableApp">
      <Table columns={columns} data={data} />
    </div>

  );
}

export default AllEntries;
