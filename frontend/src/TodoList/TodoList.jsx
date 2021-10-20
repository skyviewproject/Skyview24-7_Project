import React, { Component } from 'react'
import backendService from "./Service";
import "../TodoList/Style.css";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class TodoList extends Component 
{

    constructor(props) {
        super(props)
    
        this.state = {
            TodoList: [],
            TodoSub: ''
             
        }

        this.addTodo = this.addTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.markAsDone = this.markAsDone.bind(this);
        this.clearAllTodo = this.clearAllTodo.bind(this);
    }

    componentDidMount()
    {
        const api = new backendService();
        api.getAllTodoList().then((res) => 
        {
            this.setState(
                {
                    TodoList: res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        })
    }

    clearAllTodo()
    {
        
        swal({
            title: "Are you sure?",
            text: "Clearing Your Entire Todo List",
            icon: "warning",
            buttons: true,
          })
          .then((update) => {
            if (update) 
            {
                const api = new backendService()
                api.clearAllTodoList().then((res) =>
                {
                    console.log(res.status);
                    if(res.status == 200)
                    {
                        swal("Todo List Cleared Successfully!", {
                            icon: "success",
                          });
                          
                        window.location.href = "/todolist";
                    }
                })
                .catch((error) =>
                {
                    swal({
                        title: "Error",
                        text: `${error}`,
                        icon: "error",
                    });
                })
            } else {
              swal("Clearing Todolist Aborted!");
            }
        });
        
    }

    addTodo()
    {
        swal("Enter Todo Subject:", {
            content: "input",
        })
        .then((value1) => 
        {
            if(value1=='' || value1==null)
            {
                swal({
                    title: "Wait",
                    text: "Todo subject can not be Empty",
                    icon: "warning",
                });
            }

            else
            {
                var todo = {
                    todoName: value1
                }
                const api = new backendService();
                api.addNewTodoList(todo).then((res) => 
                {
                    if(res.data === "new Todo has been added succesfully")
                    {
                        swal({
                            text: "New Todo has been Added Succesfully",
                            icon: "success",
                        });

                        window.location.href = "/todolist";
                    }
                })
                .catch((error) =>
                {
                    swal({
                        title: "Error",
                        text: `${error}`,
                        icon: "warning",
                    });
                })
            }
        });
    }

    updateTodo(tId)
    {
        swal("Enter Todo Subject:", {
            content: "input",
            value: "this is dummy value"
        })
        .then((value2) => 
        {
            if(value2=='' || value2==null)
            {
                swal({
                    title: "Wait",
                    text: "Todo subject can not be Empty",
                    icon: "warning",
                });
            }

            else
            {
                var todo = {
                    todoName: value2
                }
                const api = new backendService();
                api.updateTodoList(tId, todo).then((res) => 
                {
                    if(res.data === "Your todo has been Updated Successfully")
                    {
                        swal({
                            text: "Todo has been Updated Succesfully",
                            icon: "success",
                        });

                        window.location.href = "/todolist";
                    }
                })
                .catch((error) =>
                {
                    swal({
                        title: "Error",
                        text: `${error}`,
                        icon: "warning",
                    });
                })
            }
        });
    }

    markAsDone(tId)
    {
        const api = new backendService();
        api.completeTodoTask(tId).then((res) => 
        {
            if(res.data === "Your todo has been Done Successfully")
            {
                swal({
                    text: "This is Marked as Completed",
                    icon: "success",
                });

                window.location.href = "/todolist";
            }

            else 
            {
                swal({
                    title: "Already Done",
                    text: "Your todo is Done already",
                    icon: "warning",
                });

            }
        })
        .catch((error) =>
        {
            swal({
                title: "Error",
                text: `${error}`,
                icon: "warning",
            });
        })
    }

    render() {
        const user = new SesssionService();

        if(user.getUserSession()==null)
        {
            window.location.href = "/unauthorized"
        }

        else
        {
            if(user.getUserRole() !== "ROLE_SUPERVISIOR")
            {
                window.location.href = "/forbidden"
            }

            else
            {
        
                return (
                    <div class="wrappermytodolist">
                    <div class="cardholder">
                        <div class="card">
                            <div class="btnhldr">
                                <h3>Manage Todolist</h3>
                                <button onClick={this.addTodo}>Add Todo <i class="fa fa-plus" aria-hidden="true"></i></button>
                                <button onClick={this.clearAllTodo}>Clear All <i class="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                            <div class="listhldr">
                               {
                                   this.state.TodoList.map(
                                       todo => 
                                            (
                                                () =>
                                                {
                                                    if(todo.todoStatus == true)
                                                    {
                                                        return(
                                                            <div class="lists" id="done">
                                                                <div class="sbdv1">
                                                                    <i class="fa fa-check-square" aria-hidden="true"></i>
                                                                </div>
                                                                <div class="sbdv2">
                                                                    <h5>{todo.todoName}</h5> 
                                                                </div>
                                                                <div id>

                                                                </div>
                                                            </div>
                                                        )
                                                    }

                                                    else
                                                    {
                                                        return(
                                                            <div class="lists" id="undone">
                                                                <div class="sbdv1" onClick={() => this.markAsDone(todo.id)}>
                                                                    <input type="checkbox" name="done" id="done"/>
                                                                </div>
                            
                                                                <div class="sbdv2">
                                                                    <h5>{todo.todoName}</h5>
                                                                </div>
                            
                                                                <div class="sbdv3">
                                                                    <button onClick={() => this.updateTodo(todo.id)}><i class="fa fa-pencil-square" aria-hidden="true"></i></button>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                }
                                            )
                                            
                                        ()
                                   )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
                )
            }
        }

    }
}

export default TodoList
