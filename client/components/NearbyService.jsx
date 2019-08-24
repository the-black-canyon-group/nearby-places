import React from 'react';
import NearbyCard from './NearbyCard/NearbyCard.jsx'

class NearbyService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NearbyCard />
      </div>
    );
  }
}

export default NearbyService;
