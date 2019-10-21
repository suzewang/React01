import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <h1>正在进行------------{this.props.todo.length}</h1>
                <ul>
                    {
                        this.props.todo.map((item,idx)=><li key={idx}><input type="checkbox" onChange={(e)=>{this.props.removeTodo(idx);e.target.checked=false}}></input>{item}------<button onClick={()=>{this.props.delTodo(idx)}}>删除</button></li>)
                    }
                </ul>
                <h1>已经完成------------{this.props.todoover.length}</h1>
                <ul>
                    {
                        this.props.todoover.map((item,idx)=><li key={idx}><input type="checkbox" defaultChecked="checked" onChange={(e)=>{this.props.removeTodoover(idx);e.target.checked=true}}></input>{item}------<button onClick={()=>{this.props.delTodoover(idx)}}>删除</button></li>)
                    }
                </ul>
            </div>
        )
    }
}
