import styles from './NearbyCard.css';
import React from 'react';

class NearbyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: []
    };
  }

  componentDidMount() {
    fetch(`/api/nearbyplaces/15`)
      .then(res => res.json())
      .then(properties => this.setState({ properties }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div ></div>
    )
  }

}

export default NearbyCard;