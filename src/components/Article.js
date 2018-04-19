import React from 'react'
import {Component} from 'react'

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.defaultOpen
        }

        this.handleClick = handleClick.bind(this);
    }

    componentWillMount() {
        console.log('---', 'mointing');
    }

    componentWillReciveProps(nextProps) {
        console.log(1111)
        if (nextProps.defaultOpen !== this.props.defaultOpen) {
            console.log(1111)
            this.setState({
                isOpen: nextProps.defaultOpen
            })
        }
    }

    render() {
        const {article} = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                <section>body</section>
                {body}
                <h3>
                    creation date: {(new Date(article.date)).toDateString()}
                </h3>
            </div>
        )
    }
}

function handleClick() {
    this.setState({
        isOpen: !this.state.isOpen
    })
}

export default Article
