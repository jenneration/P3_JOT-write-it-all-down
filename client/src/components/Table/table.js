import React from "react";
//USE FOR: All Entries Page + Saved Quotes Page

function Table(props) {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr className="thead-light text-left">
                        <th className="theader" scope="col">{props.theader1}</th>
                        <th className="theader" scope="col">{props.theader2}</th>
                        <th className="theader" scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
        </div>
    )
}

export default Table;