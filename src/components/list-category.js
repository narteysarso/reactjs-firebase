import React from "react";
import Category from "./category";

class ListCategory extends React.Component{


    render(){
        return (
            <div>
                <h4 className="header">Note Categories  <small><a className="btn btn-primary text-white" data-toggle="modal" data-target="#add-category-modal">Add Category</a></small></h4>
                
            </div>
        )
    }
}

export default ListCategory;