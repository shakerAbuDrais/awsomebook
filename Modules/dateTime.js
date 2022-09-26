import { DateTime } from '../luxon.js';

const time = document.querySelector('.time');
const now = DateTime.now();

window.addEventListener('load', () => {
  time.textContent = `${now}`;
});
