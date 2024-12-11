export function generateHotels(hotels) {
  const hotelsList = document.querySelector('.hotels__list');

  hotels.forEach(hotel => {
    const itemHotel = document.createElement('li');
    const imageHotel = document.createElement('img');
    const content = document.createElement('div');
    const description = document.createElement('p');
    const titleHotel = document.createElement('h3');
    const price = document.createElement('p');
    const rating = document.createElement('p');

    itemHotel.setAttribute('class', 'hotels__item');
    imageHotel.setAttribute('class', 'hotels__image');
    imageHotel.setAttribute('src', hotel.img);
    imageHotel.setAttribute('width', 280);
    imageHotel.setAttribute('height', 250); 
    imageHotel.setAttribute('alt', 'Фото отеля.');
    content.setAttribute('class', 'hotels__content');
    description.textContent = hotel.description;
    description.setAttribute('class', 'hotels__text');
    titleHotel.textContent = hotel.title;
    titleHotel.setAttribute('class', 'hotels__subtitle');
    price.textContent = hotel.price;
    price.setAttribute('class', 'hotels__price');
    rating.textContent = hotel.rating;
    rating.setAttribute('class', 'hotels__rating');
    itemHotel.appendChild(imageHotel);
    itemHotel.appendChild(content);
    content.appendChild(description);
    content.appendChild(titleHotel);
    content.appendChild(price);
    content.appendChild(rating);
    hotelsList.appendChild(itemHotel);
  });
}
