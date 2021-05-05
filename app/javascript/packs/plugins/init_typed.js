import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('.typed-js', {
    strings: ["Bookmarks", "To ease indecision"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
