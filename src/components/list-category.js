import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import Category from "./category";
class ListCategory extends React.Component{

    render(){
        return (
            <div>
                <h4 className="header">Note Categories 
                    <small>
                        <a href="" className="btn btn-primary text-white" data-toggle="modal" data-target="#add-category-modal">Add Category</a>
                    </small>
                </h4>
                {
                    this.props.categories && this.props.categories.map(cat => {
                        return <Category name={cat.name} description={cat.description} />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        categories: state.firestore.ordered.categories
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'categories'}
    ])
)(ListCategory);