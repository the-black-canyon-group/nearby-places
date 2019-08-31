import React from 'react';
import styles from './LikeButton.css'

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href='#' onClick={this.props.handleLike}><i id={this.props.placeId} className={`far fa-heart ${this.props.isLiked ? styles.liked : styles.normal}`}></i></a>
    )
  }

}

export default LikeButton;
