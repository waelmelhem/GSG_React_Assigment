import React from "react";

class Task extends React.Component{
    render (props){
        return (
            
            <div>
                <h3>{this.props.title}</h3>
                <textarea value={this.props.description} readOnly>

                </textarea>
                <br/>
                <button onClick={this.props.edit.bind(this,this.props.index)}>Edit</button>
                <button onClick={this.props.delete.bind(this,this.props.index)}>Delete</button>
                <hr/>
            </div>
        )
    }
}
export default Task;