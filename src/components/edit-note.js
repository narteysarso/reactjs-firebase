import React from "react";

class EditNote extends React.Component{
    state = {
        text: "",
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
            <div className="modal" tabindex="1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title"> Edit a note</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit} >
                        
                                <div>
                                    <textarea name="text" className="form-control" value={this.state.text} onChange={this.onChange} placeholder="Write note here"/>
                                </div>
                                <div style={{padding: "10px"}}>
                                    <button type="submit" className="btn btn-primary btn-block">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default EditNote