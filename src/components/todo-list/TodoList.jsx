import { Component } from 'react'
import ListItem from '../list-item/ListItem.jsx'
import placeHolderTasks from './placeHolderTasks'

export default class TodoList extends Component {


    render() {
        const listItems = placeHolderTasks.map((placeHolderTask, index) => {
            return (
                <ListItem task={placeHolderTask} key={`ListItem ${index}`} />
            )
        })
        return (
            <div>
                <h1> Things I should stop procrastinating:</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}