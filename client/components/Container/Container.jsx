import styles from './Container.css';
import React from 'react';
import axios from 'axios';
import NearbyCard from '../NearbyCard/NearbyCard.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likedPlaces: [],
      nearbyPlaces: [],
      currentIdx: 0
    };
    this.getCurrentCards = this.getCurrentCards.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    const id = this.props.id || 2;
    return axios.get(`/api/nearbyplaces/${id}`)
      .then(res => this.setState({ nearbyPlaces: res.data.nearbyPlaces }))
      .catch(err => console.log(err))
  }

  handleArrowClick(e) {
    e.preventDefault();
    const { currentIdx } = this.state;
    let cards = document.querySelectorAll(`#card`)
    if (e.target.id === 'right' || e.target.className.match(/right/)) {
      for (let i = 0; i < cards.length; i += 1) {
        cards[i].classList.remove(styles.disabled);
        cards[i].classList.add(styles.listItem);
        cards[i].classList.add(styles.animateRight);
      }

      setTimeout(() => {
        for (let i = 0; i < cards.length; i += 1) {
          if (i === 0 || i === 4) {
            cards[i].classList.add(styles.disabled)
          }
          cards[i].classList.remove(styles.animateRight);
        }
        this.setState({ currentIdx: currentIdx + 1 })
      }, 500)

    } else {
      for (let i = 0; i < cards.length; i += 1) {
        cards[i].classList.remove(styles.disabled);
        cards[i].classList.add(styles.listItem);
        cards[i].classList.add(styles.animateLeft);
      }
      setTimeout(() => {
        for (let i = 0; i < cards.length; i += 1) {
          if (i === 0 || i === 4) {
            cards[i].classList.add(styles.disabled)
          }
          cards[i].classList.remove(styles.animateLeft);
        }
        this.setState({ currentIdx: currentIdx - 1 })
      }, 500)

    }

  }

  handleLike(e) {
    e.preventDefault();
    const { likedPlaces } = this.state;
    const id = Number(e.target.id)
    if (likedPlaces.includes(id)) {
      const newLikedPlaces = likedPlaces.filter(place => place !== id)
      this.setState({ likedPlaces: newLikedPlaces })
    } else {
      this.setState({ likedPlaces: likedPlaces.concat(Number(id)) })

    }
  }

  getCurrentCards() {
    const { nearbyPlaces, currentIdx } = this.state
    if (currentIdx === 0 && nearbyPlaces.length > 0) {
      return [nearbyPlaces[0]].concat(nearbyPlaces.slice(currentIdx, currentIdx + 4));
    } else if (currentIdx === nearbyPlaces.length - 3) {
      return (nearbyPlaces.slice(currentIdx - 1).concat(nearbyPlaces[0]));
    } else {
      return nearbyPlaces.slice(currentIdx - 1, currentIdx + 4)
    }
  }

  render() {
    const { nearbyPlaces, currentIdx } = this.state;
    let cardIdx = 0;

    return (
      <div className={styles.nearbyContainer}>
        <h1 className={styles.headline}>More Places to Stay</h1>
        <div className={styles.wrapper}>
          <div className={styles.btnWrapper} >
            <button id='left' onClick={this.handleArrowClick} className={currentIdx > 0 ? styles.arrow : styles.disabled}><i className="fa fa-chevron-left"></i></button>
          </div>
          <div className={styles.list}>
            {this.getCurrentCards().map(place => (
              <div className={cardIdx !== 0 && cardIdx !== 4 ? styles.listItem : styles.disabled} id={'card'} key={cardIdx += 1} > <NearbyCard handleLike={this.handleLike} isLiked={this.state.likedPlaces.includes(place.id)} placeDetails={place} /> </div>
            ))}
          </div>
          <div className={styles.btnWrapper}>
            <button id='right' onClick={this.handleArrowClick} className={currentIdx < nearbyPlaces.length - 3 ? styles.arrow : styles.disabled}><i className="fa fa-chevron-right"></i></button>
          </div>
        </div >
      </div>
    )
  }
}

export default Container;
