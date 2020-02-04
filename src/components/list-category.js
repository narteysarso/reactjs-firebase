import React from "react";

class ListCategory extends React.Component{


    render(){
        return (
            <div>
                <h4 className="header">Note Categories  <small><a className="btn btn-primary text-white" data-toggle="modal" data-target="#add-category-modal">Add Category</a></small></h4>
                <p></p>
            </div>
        )
    }
}

export default ListCategory;