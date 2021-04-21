import React from 'react';
import "./style.css";

function Card(props) {
    return (
        <div className="card-page">
            <div className="row">
                <div className="col-md-4">

                    <div className="card" style={{ height: '300px', width: "300px" }}>
                        <div className="card-body">
                            <h5 className="card-title" key={props.id}>
                                {props.title}
                            </h5>
                            <i className="fas fa-book" />
                            <br />
                            <br />
                            <a href="#" className="card-link">
                                See Entries
							</a>
                            <br />
                            <a href="#" className="card-link">
                                Create New Entry
							</a>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    );
}

export default Card;