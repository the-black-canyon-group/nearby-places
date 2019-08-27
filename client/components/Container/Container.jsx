import styles from './Container.css';
import React from 'react';
import axios from 'axios';
import NearbyCard from '../NearbyCard/NearbyCard.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nearbyPlaces: [],
      currentIdx: 0
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const id = this.props.id || 2;
    return axios.get(`/api/nearbyplaces/${id}`)
      .then(res => this.setState({ nearbyPlaces: res.data.nearbyPlaces }))
      .catch(err => console.log(err))
  }

  handleClick(e) {
    e.preventDefault();
    const { currentIdx } = this.state;
    e.target.id === 'right' || e.target.className.match(/right/) ? this.setState({ currentIdx: currentIdx + 1 }) : this.setState({ currentIdx: currentIdx - 1 })
  }

  render() {
    const { nearbyPlaces, currentIdx } = this.state;
    let cardIdx = 0;
    return (
      <div className={styles.wrapper}>
        More Places to Stay
        <button id='left' onClick={this.handleClick} className={currentIdx > 0 ? styles.arrow : styles.disabled}><i className="fa fa-chevron-left"></i></button>
        <div className={styles.list}>
          {nearbyPlaces.slice(currentIdx, currentIdx + 3).map(place => (
            <NearbyCard key={cardIdx += 1} placeDetails={place} />
          ))}
        </div>
        <button id='right' onClick={this.handleClick} className={currentIdx < nearbyPlaces.length - 3 ? styles.arrow : styles.disabled}><i className="fa fa-chevron-right"></i></button>
      </div>
    )
  }
}

export default Container;