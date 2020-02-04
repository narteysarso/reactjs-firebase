import React from "react";

function Note(props){

    return (
        <div className="col-sm-12">
            <h5>{props.text}</h5>
            <div className="row justify-content-right">
                <a className="btn btn-primary">Edit</a>
                <a className="btn btn-danger">Remove</a>
            </div>
        </div>
    )

}

export default Note