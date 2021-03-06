import React from "react";

class AddNote extends React.Component{
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
            <div>
            <h4> Add a note</h4>
            <form className="jumbotron" onSubmit={this.handleSubmit} >
                <div>
                    <textarea name="text" className="form-control" value={this.state.text} onChange={this.onChange} placeholder="Write note here"/>
                </div>
                <div style={{padding: "10px"}}>
                    <button type="submit" className="btn btn-primary btn-block">Add</button>
                </div>
            </form>
            </div>
        )
    }
}

export default AddNote