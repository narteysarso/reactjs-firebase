import React from "react";

function Category(props){

    return (
        <div className="col-sm-12">
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <div className="row justify-content-right">
                <a className="btn btn-primary">Edit</a>
                <a className="btn btn-danger">Remove</a>
            </div>
        </div>
    )

}

export default Category