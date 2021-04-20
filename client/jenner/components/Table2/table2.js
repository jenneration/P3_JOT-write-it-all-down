
import React from "react";
import "./table2.css"
import {
    useTable,
    useSortBy,
    usePagination,
    useFilters,
    useGlobalFilter,
    useAsyncDebounce
} from "react-table";


// Function for global search -- RED
function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter
}) {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = React.useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 200);

    return (
        <div style={{ padding: 10, border: "1px solid red", marginTop: 20, background: "red" }}>
            Search:{" "}
            <input
                value={value || ""}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
                style={{
                    fontSize: "1.1rem",
                    // border: "0"
                }}
            />
        </div>
    );
}
// Global search function ended



// Function for default filters
function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter }
}) {
    const count = preFilteredRows.length;

    return (
        <input
            value={filterValue || ""}
            onChange={(e) => {
                setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
            }}
            placeholder={`Search ${count} records...`}

        />
    );
}
// Default filters function Ended


// Function for select filter
// function SelectColumnFilter({
//     column: { filterValue, setFilter, preFilteredRows, id }
// }) {
//     // Calculate the options for filtering
//     // using the preFilteredRows
//     const options = React.useMemo(() => {
//         const options = new Set();
//         preFilteredRows.forEach((row) => {
//             options.add(row.values[id]);
//         });
//         return [...options.values()];
//     }, [id, preFilteredRows]);

//     // Render a multi-select box
//     return (
//         <select
//             value={filterValue}
//             onChange={(e) => {
//                 setFilter(e.target.value || undefined);
//             }}
//         >
//             <option value="">All</option>
//             {options.map((option, i) => (
//                 <option key={i} value={option}>
//                     {option}
//                 </option>
//             ))}
//         </select>
//     );
// }
// Select filter function end

// // Function for slider range filter
// function SliderColumnFilter({
//     column: { filterValue, setFilter, preFilteredRows, id }
// }) {
//     // Calculate the min and max
//     // using the preFilteredRows

//     const [min, max] = React.useMemo(() => {
//         let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
//         let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
//         preFilteredRows.forEach((row) => {
//             min = Math.min(row.values[id], min);
//             max = Math.max(row.values[id], max);
//         });
//         return [min, max];
//     }, [id, preFilteredRows]);

//     return (
//         <>
//             <input
//                 type="range"
//                 min={min}
//                 max={max}
//                 value={filterValue || min}
//                 onChange={(e) => {
//                     setFilter(parseInt(e.target.value, 10));
//                 }}
//             />
//             <span>{filterValue || min}</span>{" "}
//             <button onClick={() => setFilter(undefined)}>Off</button>
//         </>
//     );
// }
// // Slider filter function end

//// Function for Min-Max range filter
// function NumberRangeColumnFilter({
//     column: { filterValue = [], preFilteredRows, setFilter, id }
// }) {
//     const [min, max] = React.useMemo(() => {
//         let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
//         let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
//         preFilteredRows.forEach((row) => {
//             min = Math.min(row.values[id], min);
//             max = Math.max(row.values[id], max);
//         });
//         return [min, max];
//     }, [id, preFilteredRows]);

//     return (
//         <div
//             style={{
//                 display: "flex"
//             }}
//         >
//             <input
//                 value={filterValue[0] || ""}
//                 type="number"
//                 onChange={(e) => {
//                     const val = e.target.value;
//                     setFilter((old = []) => [
//                         val ? parseInt(val, 10) : undefined,
//                         old[1]
//                     ]);
//                 }}
//                 placeholder={`Min (${min})`}
//                 style={{
//                     width: "70px",
//                     marginRight: "0.5rem"
//                 }}
//             />
//       to
//             <input
//                 value={filterValue[1] || ""}
//                 type="number"
//                 onChange={(e) => {
//                     const val = e.target.value;
//                     setFilter((old = []) => [
//                         old[0],
//                         val ? parseInt(val, 10) : undefined
//                     ]);
//                 }}
//                 placeholder={`Max (${max})`}
//                 style={{
//                     width: "70px",
//                     marginLeft: "0.5rem"
//                 }}
//             />
//         </div>
//     );
// }
// // Min-Max range filter function end



// Table function. It creates UI.
function Table({ columns, data }) {

    const filterTypes = React.useMemo(
        () => ({
            text: (rows, id, filterValue) => {
                return rows.filter((row) => {
                    const rowValue = row.values[id];
                    return rowValue !== undefined
                        ? String(rowValue)
                            .toLowerCase()
                            .startsWith(String(filterValue).toLowerCase())
                        : true;
                });
            }
        }),
        []
    );

    const defaultColumn = React.useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: DefaultColumnFilter
        }),
        []
    );



    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize, globalFilter },
        visibleColumns,
        preGlobalFilteredRows,
        setGlobalFilter
    } = useTable(
        {
            columns,
            data,
            defaultColumn, // Be sure to pass the defaultColumn option
            filterTypes
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination,
    );

    // Render the UI for your table -- PINK
    return (
        <>

            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
            />

            <table className="container" //container ADDED BY JENNER
                {...getTableProps()}
                border={1}
                style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    margin: "auto",
                    background: "pink",
                    height: "30px"
                }}
            >

                <thead>
                    {headerGroups.map((group) => (
                        <tr {...group.getHeaderGroupProps()}>
                            {group.headers.map((column) => (
                                <th {...column.getHeaderProps()}>

                                    <div {...column.getSortByToggleProps()}>
                                        {column.render("Header")}
                                        <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? " 🔽"
                                                    : " 🔼"
                                                : column.canSort
                                                    ? "⏺"
                                                    : ""}
                                        </span>
                                    </div>


                                    <div>
                                        {column.canFilter ? column.render("Filter") : null}
                                    </div>

                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>


                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>

                <tfoot>
                    {footerGroups.map((group) => (
                        <tr {...group.getFooterGroupProps()}>
                            {group.headers.map((column) => (
                                <td {...column.getFooterProps()}>
                                    {column.render("Footer")}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tfoot>

            </table>
            {/* container below added by JENNER */}
            <div className="pagination container">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {"<<"}
                </button>{" "}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {"<"}
                </button>{" "}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {">"}
                </button>{" "}
                <button
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                >
                    {">>"}
                </button>{" "}
                <span>
                    Page{" "}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{" "}
                </span>
                <span>
                    | Go to page:{" "}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
                            gotoPage(page);
                        }}
                        style={{ width: "100px" }}
                    />
                </span>{" "}
                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>

        </>
    );
}
// Table function component end

// App component start
function Table2() {

    // Columns array. This array contains your table headings and accessors which maps keys from data array
    const columns = React.useMemo(() => (
        [
            // {
            //     "id": "columnId_00.932218571420014",
            //     "Header": "Serial",
            //     "Footer": "",
            //     "columns": [
            //         {
            //             "id": "columnId_0_00.8451394832122869",
            //             "Header": "",
            //             "Footer": "",
            //             "accessor": "Key0"
            //         }
            //     ]
            // },
            {
                "id": "u1",
                "Header": "Journal Entries",
                "Footer": "",
                "columns": [
                    // {
                    //     "id": "columnId_0_10.9528755957385358",
                    //     "Header": "Prefix",
                    //     "Footer": "",
                    //     "accessor": "Key1",
                    //     "filter": "includes"
                    // },
                    {
                        "id": "u2",
                        "Header": "Title",
                        "Footer": "",
                        "accessor": "Key2"
                    },
                    // {
                    //     "id": "columnId_0_10.7952652339741131",
                    //     "Header": "Gender",
                    //     "Footer": "",
                    //     "accessor": "Key3",
                    //     "filter": "includes"
                    // },
                    {
                        "id": "u3",
                        "Header": "Date",
                        "Footer": "",
                        "accessor": "Key4",
                        "filter": "equals"
                    }
                ]
            },
            {
                "id": "u4",
                "Header": "Others",
                "Footer": "",
                "columns":
                    [
                        {
                            "id": "u5",
                            "Header": "Amount",
                            "Footer": "",
                            "accessor": "Key5",
                            "filter": "between"
                        }
                    ]
            }
        ]
    ), []);

    // Data array. Replace it with your actual data.
    const data = React.useMemo(() => ([
        {
            "Key0": 1,
            "Key1": "Ms",
            "Key2": "Julian",
            "Key3": "Female",
            "Key4": 1997,
            "Key5": 96898
        },
        {
            "Key0": 2,
            "Key1": "Dr",
            "Key2": "Ketti",
            "Key3": "Female",
            "Key4": 1990,
            "Key5": 982
        },
        {
            "Key0": 3,
            "Key1": "Rev",
            "Key2": "Fallon",
            "Key3": "Female",
            "Key4": 1993,
            "Key5": 8
        },
        {
            "Key0": 4,
            "Key1": "Dr",
            "Key2": "Leela",
            "Key3": "Female",
            "Key4": 1991,
            "Key5": 81
        },
        {
            "Key0": 5,
            "Key1": "Rev",
            "Key2": "Vivienne",
            "Key3": "Female",
            "Key4": 2004,
            "Key5": 8171
        },
        {
            "Key0": 6,
            "Key1": "Ms",
            "Key2": "Margaux",
            "Key3": "Male",
            "Key4": 2002,
            "Key5": 4
        },
        {
            "Key0": 7,
            "Key1": "Rev",
            "Key2": "Mannie",
            "Key3": "Male",
            "Key4": 2011,
            "Key5": 382
        },
        {
            "Key0": 8,
            "Key1": "Mrs",
            "Key2": "Vanya",
            "Key3": "Female",
            "Key4": 2012,
            "Key5": 49021
        },
        {
            "Key0": 9,
            "Key1": "Rev",
            "Key2": "Barbabra",
            "Key3": "Female",
            "Key4": 2006,
            "Key5": 4749
        },
        {
            "Key0": 10,
            "Key1": "Mr",
            "Key2": "Fiann",
            "Key3": "Female",
            "Key4": 2006,
            "Key5": 86752
        },
        {
            "Key0": 11,
            "Key1": "Ms",
            "Key2": "Sargent",
            "Key3": "Female",
            "Key4": 1994,
            "Key5": 1297
        },
        {
            "Key0": 12,
            "Key1": "Rev",
            "Key2": "Josy",
            "Key3": "Female",
            "Key4": 2011,
            "Key5": 5
        },
        {
            "Key0": 13,
            "Key1": "Honorable",
            "Key2": "Hulda",
            "Key3": "Female",
            "Key4": 2010,
            "Key5": 435
        },
        {
            "Key0": 14,
            "Key1": "Ms",
            "Key2": "Giavani",
            "Key3": "Male",
            "Key4": 1993,
            "Key5": 9
        },
        {
            "Key0": 15,
            "Key1": "Ms",
            "Key2": "Berkley",
            "Key3": "Male",
            "Key4": 1999,
            "Key5": 242
        },
        {
            "Key0": 16,
            "Key1": "Honorable",
            "Key2": "Nick",
            "Key3": "Male",
            "Key4": 2005,
            "Key5": 351
        },
        {
            "Key0": 17,
            "Key1": "Rev",
            "Key2": "Angelina",
            "Key3": "Female",
            "Key4": 1994,
            "Key5": 23
        },
        {
            "Key0": 18,
            "Key1": "Honorable",
            "Key2": "Guglielmo",
            "Key3": "Female",
            "Key4": 1986,
            "Key5": 585
        },
        {
            "Key0": 19,
            "Key1": "Mr",
            "Key2": "Myrtie",
            "Key3": "Female",
            "Key4": 2012,
            "Key5": 97880
        },
        {
            "Key0": 20,
            "Key1": "Honorable",
            "Key2": "Oates",
            "Key3": "Male",
            "Key4": 1966,
            "Key5": 404
        },
        {
            "Key0": 21,
            "Key1": "Rev",
            "Key2": "Griswold",
            "Key3": "Male",
            "Key4": 1995,
            "Key5": 98
        },
        {
            "Key0": 22,
            "Key1": "Rev",
            "Key2": "Paxton",
            "Key3": "Male",
            "Key4": 1992,
            "Key5": 97
        },
        {
            "Key0": 23,
            "Key1": "Mr",
            "Key2": "Inesita",
            "Key3": "Male",
            "Key4": 1992,
            "Key5": 19566
        },
        {
            "Key0": 24,
            "Key1": "Honorable",
            "Key2": "Charleen",
            "Key3": "Male",
            "Key4": 2003,
            "Key5": 42
        },
        {
            "Key0": 25,
            "Key1": "Rev",
            "Key2": "Rowland",
            "Key3": "Male",
            "Key4": 2010,
            "Key5": 1
        },
        {
            "Key0": 26,
            "Key1": "Rev",
            "Key2": "Trueman",
            "Key3": "Male",
            "Key4": 1994,
            "Key5": 899
        },
        {
            "Key0": 27,
            "Key1": "Rev",
            "Key2": "Mathilda",
            "Key3": "Male",
            "Key4": 2011,
            "Key5": 129
        },
        {
            "Key0": 28,
            "Key1": "Honorable",
            "Key2": "Melloney",
            "Key3": "Female",
            "Key4": 1995,
            "Key5": 3109
        },
        {
            "Key0": 29,
            "Key1": "Rev",
            "Key2": "Inglis",
            "Key3": "Female",
            "Key4": 1993,
            "Key5": 5976
        },
        {
            "Key0": 30,
            "Key1": "Mr",
            "Key2": "Giustina",
            "Key3": "Male",
            "Key4": 1992,
            "Key5": 3357
        },
        {
            "Key0": 31,
            "Key1": "Mrs",
            "Key2": "Conrad",
            "Key3": "Male",
            "Key4": 1989,
            "Key5": 96
        },
        {
            "Key0": 32,
            "Key1": "Dr",
            "Key2": "Emmalynne",
            "Key3": "Male",
            "Key4": 2004,
            "Key5": 43
        },
        {
            "Key0": 33,
            "Key1": "Rev",
            "Key2": "Jude",
            "Key3": "Female",
            "Key4": 1992,
            "Key5": 40041
        },
        {
            "Key0": 34,
            "Key1": "Honorable",
            "Key2": "Farlee",
            "Key3": "Male",
            "Key4": 2005,
            "Key5": 33
        },
        {
            "Key0": 35,
            "Key1": "Honorable",
            "Key2": "Mendel",
            "Key3": "Female",
            "Key4": 2010,
            "Key5": 591
        },
        {
            "Key0": 36,
            "Key1": "Dr",
            "Key2": "Fae",
            "Key3": "Female",
            "Key4": 1994,
            "Key5": 81734
        },
        {
            "Key0": 37,
            "Key1": "Rev",
            "Key2": "Janella",
            "Key3": "Female",
            "Key4": 1992,
            "Key5": 296
        },
        {
            "Key0": 38,
            "Key1": "Ms",
            "Key2": "Esmeralda",
            "Key3": "Male",
            "Key4": 1987,
            "Key5": 3
        },
        {
            "Key0": 39,
            "Key1": "Ms",
            "Key2": "Quintilla",
            "Key3": "Male",
            "Key4": 2008,
            "Key5": 55
        },
        {
            "Key0": 40,
            "Key1": "Rev",
            "Key2": "Devland",
            "Key3": "Female",
            "Key4": 2010,
            "Key5": 8259
        },
        {
            "Key0": 41,
            "Key1": "Mrs",
            "Key2": "Preston",
            "Key3": "Male",
            "Key4": 2008,
            "Key5": 28923
        },
        {
            "Key0": 42,
            "Key1": "Dr",
            "Key2": "Quintilla",
            "Key3": "Male",
            "Key4": 1993,
            "Key5": 22281
        },
        {
            "Key0": 43,
            "Key1": "Mrs",
            "Key2": "Minor",
            "Key3": "Male",
            "Key4": 2010,
            "Key5": 26
        },
        {
            "Key0": 44,
            "Key1": "Mrs",
            "Key2": "Jody",
            "Key3": "Male",
            "Key4": 1985,
            "Key5": 938
        },
        {
            "Key0": 45,
            "Key1": "Mr",
            "Key2": "Shanda",
            "Key3": "Female",
            "Key4": 2004,
            "Key5": 1363
        },
        {
            "Key0": 46,
            "Key1": "Mrs",
            "Key2": "Sheelagh",
            "Key3": "Male",
            "Key4": 2004,
            "Key5": 2814
        },
        {
            "Key0": 47,
            "Key1": "Ms",
            "Key2": "Ester",
            "Key3": "Female",
            "Key4": 2004,
            "Key5": 4
        },
        {
            "Key0": 48,
            "Key1": "Rev",
            "Key2": "Anita",
            "Key3": "Male",
            "Key4": 2008,
            "Key5": 43
        },
        {
            "Key0": 49,
            "Key1": "Mr",
            "Key2": "Aurelea",
            "Key3": "Male",
            "Key4": 2003,
            "Key5": 15325
        },
        {
            "Key0": 50,
            "Key1": "Ms",
            "Key2": "Aldis",
            "Key3": "Male",
            "Key4": 1996,
            "Key5": 4
        }
    ]), []);


    return (
        <Table columns={columns} data={data} />
    );
}
// App component end

export default Table2;