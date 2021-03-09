import { Component } from 'react'
import ListItem from '../list-item/ListItem.jsx'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <h1> Things I should stop procrastinating:</h1>
                <ul>
                    <ListItem />
                </ul>
            </div>
        )
    }
}