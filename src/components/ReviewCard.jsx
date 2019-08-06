import React, { Fragment } from 'react';

import StarBar from './StarBar';

const ReviewCard = ({ reviews }) => {
  console.log('review card reviews: ', reviews);
  return (
    <Fragment>
      <h3>{`${reviews.numberOfReviews} customer reviews`}</h3>
      <div>
        Stars section <span>{`${reviews.stars} out of 5 stars`}</span>
      </div>
      <StarBar stars={reviews.stars} />
    </Fragment>
  );
};

export default ReviewCard;
