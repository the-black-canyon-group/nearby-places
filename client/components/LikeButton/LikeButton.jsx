import React from 'react';
import styles from './LikeButton.css'

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { isLiked } = this.state;
    this.setState({ isLiked: !isLiked })
  }

  render() {
    const { isLiked } = this.state;
    return (
      <a href='#' onClick={this.props.handleLike}><i id={this.props.placeId} className={`far fa-heart ${this.props.isLiked ? styles.liked : styles.normal}`}></i></a>
    )
  }

}

export default LikeButton;