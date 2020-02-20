import React from "react";

class AddCategory extends React.Component{
    state = {
        name: "",
        description: ""
    }

    handleSubmit = (event) => {
        event.preventDefault(); //prevents default browser event (submitting form)
        event.stopPropagation(); //prevents event from bubbling to other components
        
        
    }
    
    onChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({[name] :value});
    }


    render(){
        return (

            <div className="modal fade" id="add-category-modal" tabindex="1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add category</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit} >
                                <div className="form-group">
                                    <label htmlFor="note-category">Notes category</label>
                                    <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.onChange} placeholder="Note category"/>
                                </div>
                                
                                <div>
                                    <textarea name="description" className="form-control" value={this.state.description} onChange={this.onChange} placeholder="description of category"/>
                                </div>
                                <div style={{padding: "10px"}}>
                                    <button type="submit" className="btn btn-primary btn-block">Add category</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}



export default AddCategory