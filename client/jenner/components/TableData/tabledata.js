
import React from 'react';

function TableData(props) {
    return (
        <tr key={props.id}>
            <td>{props.data1}</td>
            <td>{props.data2}</td>
            <td><span onClick={() => props.remove(props.id)} className="remove">X</span></td>
        </tr >
    )
}


export default TableData;