
import React from 'react';


function Create(props) {
    return (
        <div className="create-bar">
            <h1 key={props.id}>Welcome, {props.name}</h1>

            <div className="row">
                <div className="col-sm-6 input-col">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">
                                Create New Journal
							</span>
                        </div>
                        <input type="text" className="form-control" />
                        <button>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Create;