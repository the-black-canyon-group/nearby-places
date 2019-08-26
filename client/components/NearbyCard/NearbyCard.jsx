import styles from './NearbyCard.css';
import React from 'react';

class NearbyCard extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { placeDetails } = this.props;
    const avgRating = placeDetails.ratings.reduce((review, accum) => accum + review) / placeDetails.ratings.length;
    return (
      <div className={styles.placeCard}>
        <img className={styles.img} src={placeDetails.image}></img>
        <h4 className={styles.roomType}>{placeDetails.roomType} - {placeDetails.location}</h4>
        <h2 className={styles.title}>{placeDetails.title}</h2>
        <p className={styles.price}>${placeDetails.price}/night</p>
        <p className={styles.rating}>{avgRating} ({placeDetails.ratings.length})</p>
      </div>
    )
  }

}

export default NearbyCard;