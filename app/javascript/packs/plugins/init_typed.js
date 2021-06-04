import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  if (document.querySelector(".typed-js")){
    new Typed('.typed-js', {
    strings: ["Bookmarks", "To ease indecision"],
    typeSpeed: 50,
    loop: true
  });
  };

}

export { loadDynamicBannerText };
