import React, { Component } from 'react';

import ReviewCard from './ReviewCard';
class ReviewCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      reviews: []
    };
  }

  componentDidMount() {
    (async () => {
      try {
        let response = await fetch(
          'https://08390e6d-6f49-4e90-8b81-c3bfebb193a6.mock.pstmn.io/customer-reviews'
        );
        let { data } = await response.json();

        this.setState({
          isLoaded: true,
          reviews: data
        });
      } catch (error) {
        this.setState({
          isLoaded: true,
          error
        });
      }
    })();
  }

  render() {
    const { error, isLoaded, reviews } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <ReviewCard reviews={reviews} />;
    }
  }
}

export default ReviewCardContainer;
