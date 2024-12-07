export function generateHotels(hotels) {
  const hotelsList = document.querySelector('.hotels__list');

  hotels.forEach(hotel => {
    const itemHotel = document.createElement('li');
    const imageHotel = document.createElement('img');
    const titleHotel = document.createElement('h3');

    imageHotel.setAttribute('class', 'hotels__image');
    imageHotel.setAttribute('src', hotel.img);
    imageHotel.setAttribute('width', 280);
    imageHotel.setAttribute('height', 250); 
    imageHotel.setAttribute('alt', 'Фото отеля.');   
    titleHotel.textContent = hotel.title;
    titleHotel.setAttribute('class', 'hotels__subtitle');
    itemHotel.appendChild(imageHotel)
    itemHotel.appendChild(titleHotel)
    hotelsList.appendChild(itemHotel)
  });
}