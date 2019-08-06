import React, { Component } from 'react';
import { FaStarHalfAlt, FaStar, FaRegStar } from 'react-icons/fa';

class StarBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minRating: 1,
      maxRating: 5
    };
  }

  renderStars(stars) {
    const { maxRating } = this.state;

    const roundedRating = Math.ceil(stars * 2) / 2;
    const wholeStars = Math.floor(roundedRating);
    const halfStars = roundedRating % 1 !== 0 ? 1 : 0;
    const emptyStars = maxRating - wholeStars - halfStars;
    const starTypes = [
      {
        type: 'whole',
        value: wholeStars
      },
      {
        type: 'half',
        value: halfStars
      },
      {
        type: 'empty',
        value: emptyStars
      }
    ];
    let starsArray = [];

    for (let i = 0; i < starTypes.length; i += 1) {
      let x = 0;
      while (x < starTypes[i].value) {
        if (starTypes[i].type === 'whole') {
          starsArray.push('wholeStar');
        } else if (starTypes[i].type === 'half') {
          starsArray.push('halfStar');
        } else {
          starsArray.push('emptyStar');
        }
        x += 1;
      }
    }

    const starIcon = iconType => {
      if (iconType === 'wholeStar') {
        return <FaStar />;
      } else if (iconType === 'halfStar') {
        return <FaStarHalfAlt />;
      } else {
        return <FaRegStar />;
      }
    };

    return starsArray.map((star, index) => (
      <span key={`${star + index}`}>{starIcon(star)}</span>
    ));
  }

  render() {
    const { stars } = this.props;
    return <div className="star-bar">{this.renderStars(stars)}</div>;
  }
}

export default StarBar;
