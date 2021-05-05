import swal from 'sweetalert';

const initSweetalert = (selector, options = {}) => {
  const swalButton = document.querySelector('#delete-link');
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', () => {
      swal(options);
    });
  }
};

export { initSweetalert };
