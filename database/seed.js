const Property = require('./Property.js');

const setTitle = () => {
  const firstWordChoices = ['Little', 'Big', ''];
  const secondWordChoices = ['Happy', 'Dark', 'Bright', 'Spooky', 'AMAZING', 'Spectacular', 'Swanky'];
  const thirdWordChoices = ['Bungalow', 'Home', 'Victorian', 'Craftsman', 'Place'];

  const firstWord = firstWordChoices[Math.floor(Math.random() * (firstWordChoices.length))];
  const secondWord = secondWordChoices[Math.floor(Math.random() * (secondWordChoices.length))];
  const thirdWord = thirdWordChoices[Math.floor(Math.random() * (thirdWordChoices.length))];
  return `${firstWord} ${secondWord} ${thirdWord}`.trim();
};

const setLocation = () => {
  const choices = ['Happy Hill', 'Meandering Stream', 'Vulcher Lake', 'Soft Meadows', 'Sunnyside', 'Haleakala', 'Great Gourge'];

  return choices[Math.floor(Math.random() * (choices.length))];
};

const setPrice = () => Math.floor(Math.random() * 150);

const setRatings = () => {
  const listLength = Math.floor(Math.random() * 12);
  const ratingsList = [];
  for (let i = 0; i <= listLength; i += 1) {
    const rating = Math.floor(Math.random() * 5) + 1;
    ratingsList.push(rating);
  }
  return ratingsList;
};


const setRoomType = () => {
  const roomTypes = ['Private Room', 'Entire Place', 'Shared Room', 'Hostel'];
  return roomTypes[Math.floor(Math.random() * roomTypes.length)];
};

const setZip = () => {
  const options = [76309, 76306, 76301, 76308];
  return options[Math.floor(Math.random() * options.length)];
};

const setImage = () => {
  const images = ['https://fec-images.s3-us-west-1.amazonaws.com/download+(1).jpeg', 'https://fec-images.s3-us-west-1.amazonaws.com/download+(2).jpeg', 'https://fec-images.s3-us-west-1.amazonaws.com/download+(3).jpeg', 'https://fec-images.s3-us-west-1.amazonaws.com/download+(4).jpeg', 'https://fec-images.s3-us-west-1.amazonaws.com/download+(5).jpeg', 'https://fec-images.s3-us-west-1.amazonaws.com/download+(6).jpeg', 'https://fec-images.s3-us-west-1.amazonaws.com/download+(7).jpeg', 'https://fec-images.s3-us-west-1.amazonaws.com/download+(8).jpeg', 'https://fec-images.s3-us-west-1.amazonaws.com/download.jpeg', 'https://fec-images.s3-us-west-1.amazonaws.com/bernadette-gatsby-bN_TkedaBuQ-unsplash.jpg', 'https://fec-images.s3-us-west-1.amazonaws.com/jesse-roberts-561igiTyvSk-unsplash.jpg'];
  return images[Math.floor(Math.random() * images.length)];
};


for (let i = 1; i <= 100; i += 1) {
  const newProperty = new Property({
    id: i,
    location: setLocation(),
    price: setPrice(),
    title: setTitle(),
    ratings: setRatings(),
    roomType: setRoomType(),
    zip: setZip(),
    image: setImage(),
  });
  newProperty.save()
    .then((data) => { })
    .catch((err) => console.log(err));
}
