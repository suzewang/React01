import React, { Component } from 'react'

export default class Todoinput extends Component {
    handleInput=(e)=>{
        if(e.keyCode===13){
            this.props.addTodo(e.target.value);
            e.target.value="";
        }
    }
    render() {
        return (
            <div>
                <input onKeyDown={(e)=>this.handleInput(e)} type="text" placeholder="添加ToDo"/>
            </div>
        )
    }
}
