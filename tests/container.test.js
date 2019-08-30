import React from 'react';
import { shallow, mount, render } from 'enzyme';
import axios from 'axios';
import Container from '../client/components/Container/Container.jsx';
import NearbyCard from '../client/components/NearbyCard/NearbyCard.jsx';


jest.mock('axios');

const respArray = [
  {
    ratings: [
      3,
      2,
      2,
      2,
      4,
      1,
      2,
      3,
      1,
      5,
    ],
    _id: '5d5f3af7676ce818811e48eb',
    id: 1,
    location: 'Great Gourge',
    price: 105,
    title: 'Spooky Craftsman',
    roomType: 'Hostel',
    zip: 76309,
    image: 'https://fec-images.s3-us-west-1.amazonaws.com/download+(7).jpeg',
    __v: 0,
  },
  {
    ratings: [
      1,
      1,
      2,
      1,
      3,
    ],
    _id: '5d5f3af7676ce818811e48ee',
    id: 4,
    location: 'Sunnyside',
    price: 88,
    title: 'Bright Home',
    roomType: 'Shared Room',
    zip: 76309,
    image: 'https://fec-images.s3-us-west-1.amazonaws.com/download+(4).jpeg',
    __v: 0,
  },
];

const response = {
  data: {
    nearbyPlaces: respArray,
  },
};

axios.get.mockResolvedValue(response);


test('Should fetch nearby places and store them in state', () => {
  const wrapper = shallow(<Container id="3" />);
  const instance = wrapper.instance();
  return instance.componentDidMount().then(() => expect(instance.state.nearbyPlaces).toEqual(respArray));
});

test('Should increment currentIdx when right button is clicked', (done) => {
  const wrapper = mount(<Container id="3" />);
  const event = {
    preventDefault: () => { },
    target: { id: 'right' },
  };
  wrapper.find('button#right').simulate('click', event);
  setTimeout(() => {
    expect(wrapper.state('currentIdx')).toBe(1);
    done();
  }, 500);
});

test('Should decrement currentIdx when left button is clicked', (done) => {
  const wrapper = mount(<Container id="3" />);
  const event = {
    preventDefault: () => { },
    target: { id: 'left', className: '' },
  };
  wrapper.find('button#left').simulate('click', event);
  setTimeout(() => {
    expect(wrapper.state('currentIdx')).toBe(-1);
    done();
  }, 500);
});


describe('handleLike', () => {
  it('Should add a place to likedPlaces in state on click', () => {
    const wrapper = shallow(<Container />);
    const event = {
      preventDefault: () => { },
      target: { id: 1 },
    };
    const instance = wrapper.instance();
    instance.handleLike(event);
    expect(instance.state.likedPlaces).toEqual([1]);
    instance.handleLike(event);
    expect(instance.state.likedPlaces).toEqual([]);
  });
});
