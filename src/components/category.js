import React from "react";

function Category(props){

    return (
        <div className="col-sm-12" style={{display:"flex", justifyContent:"space-around"}}>
            <div>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
            </div>
            <div className="justify-content-right">
                <a className="btn btn-primary btn-sm">Edit</a>
                <a className="btn btn-danger btn-sm">Remove</a>
            </div>
        </div>
    )

}

export default Category