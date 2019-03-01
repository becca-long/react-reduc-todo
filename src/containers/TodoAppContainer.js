import React, { Component } from 'react'
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'

class TodoAppContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }
  
  handleInput(event) {
    this.setState({value: event.target.value})
  }

  clearForm() {
    this.setState({value: ''})
  }

  addTodo(event) {
    event.preventDefault()
    this.props.addTodo(this.state.value)
    this.clearForm()
  }

  removeTodo(index) {
    this.props.removeTodo(index)
  }

  render() {
    return (
      <div className="columns is-centered" style={{marginTop: '50px'}}>
      <div className="columns is-half">
      <div className="box m-auto">
        <h4 className="title is-4">My ToDo List</h4>
        <form onSubmit={(event) => this.addTodo(event)}>
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="text" placeholder="Add a todo item" value={this.state.value} onChange={this.handleInput}/>
            </div>
            <div className="control">
              <button className="button is-primary" type="submit" disabled={this.state.value === '' ? true : false}>Add</button>
            </div>
          </div>
        </form>
        <div className="content">
          <TodoList todosArray={this.props.todos}
                    removeTodo={this.removeTodo}/>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todoText) => dispatch({type: 'ADD_TODO', text: todoText}),
  removeTodo: (index) => dispatch({type: 'REMOVE_TODO', index: index})
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoAppContainer)
