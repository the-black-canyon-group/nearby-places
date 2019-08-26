import styles from './Container.css';
import React from 'react';
import axios from 'axios';
import NearbyCard from '../NearbyCard/NearbyCard.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nearbyPlaces: []
    };
  }

  componentDidMount() {
    const id = this.props.id || 2;
    return axios.get(`/api/nearbyplaces/${id}`)
      .then(res => this.setState({ nearbyPlaces: res.data.nearbyPlaces }))
      .catch(err => console.log(err))
  }

  render() {
    const { nearbyPlaces } = this.state;
    let indexPhoto = 0;
    return (
      <div className={styles.wrapper}>
        More Places to Stay
        <div className={styles.list}>
          {nearbyPlaces.length > 0 && nearbyPlaces.map(place => {
            return <div key={place.id} className={styles.listItem}><NearbyCard placeDetails={place} /></div>
          })}
        </div>
      </div>
    )
  }

}

export default Container;