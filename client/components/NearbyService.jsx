import React from 'react';
import Container from './Container/Container.jsx'

class NearbyService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Container id={this.props.id} />
      </div>
    );
  }
}

export default NearbyService;
