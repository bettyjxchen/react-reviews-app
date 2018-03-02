import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import List from "./components/List";
import ListForm from "./components/ListForm"
import { getData } from "./actions"

const REVIEWS = getData()

class App extends Component {
  state = {
    reviews: REVIEWS
  }
  
  //handles new review on submit
  _handleFormSubmit = (newReview) => {
    this.setState(({reviews}) => {
      let newReviews = [
        {
          ...newReview,
          id: Date.now().toString()
        },
        ...reviews
      ]

      return {reviews: newReviews}
    })
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          {/* Reviews List */}
          <h1>
            Reviews for Coffee Shop <small>Starbucks</small>
          </h1>
          <List reviews={this.state.reviews} />

          {/* Add Review */}
          <h5 style={{marginTop: "15px"}}>
            Add Review
          </h5>
          <ListForm onSubmit={this._handleFormSubmit}/>
        </div>
      </Provider>
    );
  }
}

export default App;

