import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import Task from "./Task";
class Form extends React.Component{
    constructor(props={}){
        super(props);
        this.state={
            "title":"",
            "description":"",
            "list":[],
            "isEdited":false
        }
    }
    onTitleChanged(e){
        let value=e.target.value;
        this.setState({
            title:value,
        })
    }
    onDescriptionChanged(e){
        let value=e.target.value;
        this.setState({
            description:value,
        })
    }
    onAddClicked(e){
        e.preventDefault();
        let list=JSON.parse(JSON.stringify(this.state.list));
        list.push({
            title:this.state.title,
            description:this.state.description,
        });
        // console.log(list);
        this.setState({
            "list":list,
        })
        this.clear()
        
        
    }
    onResetClicked(e){
        e.preventDefault();
        // console.log(this);
        this.clear()
    }
    clear(){
        this.setState({
            title:"",
            description:"",
            isEdited:false
        })
    }
    delete(idx){
        let list=JSON.parse(JSON.stringify(this.state.list));
        let list2=[];
        list.forEach((element,index) => {
            // console.log(element,index,idx!=index);
            if(idx!=index)list2.push(element);
        });
        this.setState({
            "list":list2,
        })
    }
    cancel(e){
    e.preventDefault();
    this.clear();
    }
    edit(idx){
        var element=this.state.list[idx];
        // console.log(element);
        this.setState({
            title:element.title,
            description: element.description,
            isEdited:true,
            idx,
        });
    }
    onUpdateClicked(e){
        e.preventDefault();
        let list=JSON.parse(JSON.stringify(this.state.list));
        let list2=[];
        list.forEach((element,index) => {
            if(this.state.idx==index){
                let element2={"title":this.state.title,
                "description":this.state.description}
                list2.push(element2)
            }else{
                list2.push(element);
            }
        });
        this.setState({
            "list":list2,
        })
        this.clear();
    }

    render(){
        // console.log(this.state.list);
        return(
            <div >
                <form >
                <div>
                <label htmlFor="title"><b>Title</b></label><br/>
                <input onChange={this.onTitleChanged.bind(this)} value={this.state.title}
                type="text"
                id="title"
                ></input><br/><br/>
                </div>
                <div>
                <label htmlFor="description"><b>Description</b></label><br/>
                <textarea value={this.state.description} onChange={this.onDescriptionChanged.bind(this)} id="description">
                </textarea><br/><br/>
                </div>
                <span>
                    {this.state.isEdited?<div><button onClick={this.onUpdateClicked.bind(this)}>Update</button>
                    <button onClick={this.cancel.bind(this)}>Cancel</button></div>
                    :
                    <div><button onClick={this.onAddClicked.bind(this)}>Add</button>
                    <button onClick={this.onResetClicked.bind(this)}>Rest</button></div>}
                </span>
            </form>
            <hr/>
            <ul>
                {this.state.list.map((element,idx)=>(<Task title={element.title} description={element.description}  index={idx} delete={this.delete.bind(this)} edit={this.edit.bind(this)} />))}
            </ul>
            </div>
            
        )
    }


}
export default Form;