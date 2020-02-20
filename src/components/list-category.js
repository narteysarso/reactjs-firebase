import React from "react";

class ListCategory extends React.Component{

    render(){
        return (
            <div>
                <h4 className="header">Note Categories 
                    <small>
                        <a href="" className="btn btn-primary text-white" data-toggle="modal" data-target="#add-category-modal">Add Category</a>
                    </small>
                </h4>
               
            </div>
        )
    }
}

export default ListCategory;