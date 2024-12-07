import '/public/styles/style.scss'
import { setupCounter } from './js/counter.js'
import { initTabs } from './js/tabs.js'
import { hotels } from "./js/hotels.js";
import { services } from "./js/services.js";
import { generateHotels } from './js/generate-hotels.js';
import { generateServices } from './js/generate-facilities.js';
import { clickMenu } from './js/burger-menu.js';

const counter = document.querySelector('.counter');
if (counter) {
  setupCounter(counter);
}

setTimeout(() => generateHotels(hotels), 1000);
setTimeout(() => generateServices(services), 1000);
initTabs();
clickMenu();
