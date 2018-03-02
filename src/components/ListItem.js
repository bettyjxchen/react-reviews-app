import React from 'react'
import {REVIEW_PROP_TYPE} from './constants'
import './ListItem.css'

class ListItem extends React.Component {
    static propTypes = {
        review: REVIEW_PROP_TYPE,
    }

    render() {
        let { review: { id, content, rating, author } } = this.props

        return (
            <div className="review-list-item">
                <span>{id}</span>
                <span>{content}</span>
                <span>{rating}</span>
                <span>{author}</span>
            </div>
        )
    }
}

export default ListItem