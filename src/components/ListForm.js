import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ListForm.css'

const DEFAULT_FORM_VALUES = {
    id: "",
    content: "",
    rating: "",
    author: ""
}

export default class ListForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }
    
    state = DEFAULT_FORM_VALUES

    _updateFormFieldState = (name, e) => {
        this.setState( {[name]: e.target.value} );
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        let { content, rating, author } = this.state
       
        if (content && rating && author) {
            let newReview = Object.assign({}, {author, rating, content})
            this.props.onSubmit(newReview)
            this.setState(DEFAULT_FORM_VALUES)
        }
        else {
            alert("All Fields are Required!")
        }
    }

    render() {
        let { content, rating, author } = this.state

        return (
            <form className="list-form" style={{marginTop: "10px"}} onSubmit={this._handleSubmit}>
                 <fieldset>
                    <label htmlFor="Name" className="review-form__label">Name:</label>
                    <input style={{marginLeft: "7px"}}
                        type="text"
                        id="name"
                        value={author}
                        placeholder="John Doe"
                        onChange={this._updateFormFieldState.bind(this, 'author')}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="Rating" className="review-form__label">Rating:</label>
                    <input style={{marginLeft: "7px"}}
                        type="number"
                        id="rating"
                        value={rating}
                        placeholder="4"
                        onChange={this._updateFormFieldState.bind(this, 'rating')}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="review" className="review-form__label">Review:</label>
                    <textarea style={{marginLeft: "7px"}}
                    rows="3"
                    className="review-form__field"
                        type="text"
                        id="review"
                        value={content}
                        placeholder="Awesome Coffee!"
                        onChange={this._updateFormFieldState.bind(this, 'content')}
                    />
                </fieldset>
                <footer>
                    <button type="submit" className="btn btn-info btn-sm float-left" style={{marginTop: '10px', marginRight: '10px'}}>Submit</button>
                </footer>
            </form>
        )
    }
}