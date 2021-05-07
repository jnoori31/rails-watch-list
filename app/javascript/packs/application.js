// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import 'bootstrap';

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// import 'select2/dist/css/select2.min.css'
// import 'aos/dist/aos.css';

import 'jquery-bar-rating/dist/themes/css-stars';

import { initSelect2 } from './plugins/init_select2';
import { loadDynamicBannerText } from './plugins/init_typed';
import { initializeAos } from './plugins/init_aos';
import { initSweetalert } from './plugins/init_sweetalert';
import { initStarRating } from './plugins/init_star_rating';

document.addEventListener('turbolinks:load', () => {
   // loadDynamicBannerText();
  initializeAos();
  initSelect2();
  initStarRating();
  initSweetalert('#sweet-alert-demo', {
    title: "Are you sure?",
    text: "This action cannot be reversed",
    icon: "warning"
  }, (value) => {
    if (value) {
      const link = document.querySelector('#delete-link');
      link.click();
    }
  });
});

// Review save and rating does not work with loadDynnamic but sweetalerts does
// loadDynamic typed js works but not review with stars
// import jquery review works with stars && select2 but not typed.js

