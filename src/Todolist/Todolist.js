import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todo from './Todo'

export default class Todolist extends Component {
    constructor(){
        super();
        this.state={
            todo:[],
            todoover:[]
        }
    }
    componentDidMount(){
        var localTodo=localStorage.getItem('todo');
        if(localTodo){
            var localTodoarray=JSON.parse(localTodo);
            var todo=localTodoarray;
            this.setState(
                {todo}
            )
        }
        var localTodoover=localStorage.getItem('todoover');
        if(localTodoover){
            var localTodooverarray=JSON.parse(localTodoover);
            var todoover=localTodooverarray;
            this.setState(
                {todoover}
            )
        }
    }
    addItem=(msg)=>{
        this.setState({
            todo:[msg,...this.state.todo]
        })
        var localTodo=[msg,...this.state.todo];
        localStorage.setItem('todo',JSON.stringify(localTodo));
    }
    removeItem=(a)=>{
        var todo=[...this.state.todo];
        var removetodo=todo.slice(a,a+1);
        todo.splice(a,1);
        this.setState(
            {todo}
        )
        this.setState({
            todoover:[removetodo,...this.state.todoover]
        })
        var todoover=[removetodo,...this.state.todoover];
        localStorage.setItem('todo',JSON.stringify(todo));
        localStorage.setItem('todoover',JSON.stringify(todoover));
    }
    removeItemover=(a)=>{
        var todoover=[...this.state.todoover];
        var removetodoover=todoover.slice(a,a+1);
        todoover.splice(a,1);
        this.setState(
            {todoover}
        )
        this.setState({
            todo:[...this.state.todo,removetodoover]
        })
        var todo=[...this.state.todo,removetodoover];
        localStorage.setItem('todo',JSON.stringify(todo));
        localStorage.setItem('todoover',JSON.stringify(todoover));
    }
    delItem=(a)=>{
        var todo=[...this.state.todo];
        todo.splice(a,1);
        this.setState(
            {todo}
        )
        localStorage.setItem('todo',JSON.stringify(todo));
    }
    delItemover=(a)=>{
        var todoover=[...this.state.todoover];
        todoover.splice(a,1);
        this.setState(
            {todoover}
        )
        localStorage.setItem("todoover",JSON.stringify(todoover));
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todo todo={this.state.todo} todoover={this.state.todoover} removeTodo={this.removeItem} removeTodoover={this.removeItemover} delTodo={this.delItem} delTodoover={this.delItemover}/>
            </div>
        )
    }
}
