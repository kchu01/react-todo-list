import { Component } from 'react'
import TodoList from './components/todo-list/TodoList.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello from the app</h1>
        <TodoList />
      </div>
    )
  }
}
