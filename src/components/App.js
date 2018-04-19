import React from 'react'
import {Component} from 'react'
import Article from './Article'
import articles from '../fixtures'

function revert() {
    return this.setState({
        reverted: !this.state.reverted
    });
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reverted: false,
            
        }

        this.revert = revert.bind(this);
    };



    render() {
        const articleElements = articles.map((article, index) => 
            <li key = {article.id}>
                <Article article = {article} defaultOpen = {index === 0}/>
            </li>
        );
        return (
            <div>
                <h1>App name</h1>
                <button onClick = {this.revert}>Revert</button>
                <ul>
                    {this.state.reverted ? articleElements.reverse() : articleElements}
                </ul>
            </div>
        )
    }
}

export default App
