import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import { REVIEW_PROP_TYPE } from './constants'
import './List.css'

class List extends React.Component {
  static propTypes = {
    reviews: PropTypes.arrayOf(REVIEW_PROP_TYPE),
  }

  render() {
    let { reviews } = this.props
    let reviewComponents = reviews.map((review) => {
      return (
        <li key={review.id}>
          <ListItem review={review} />
        </li>
      )
    })

    return (
      <div>
        <ul className="reviews-list" >
        <li>
          <div className="review-list-item">
                <strong>Id</strong>
                <strong>Review</strong>
                <strong>Rating</strong>
                <strong>By</strong>
          </div>
        </li>
          {reviewComponents}
        </ul>
      </div>
    )
  }
}

export default List;
