import React from 'react';
import { shallow, mount, render } from 'enzyme'
import NearbyCard from '../client/components/NearbyCard/NearbyCard.jsx';

console.log(mount)
const wrapper = mount(<NearbyCard />);
test('1 to equal 1', () => {
  console.log('hi')
})