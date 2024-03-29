import swal from 'sweetalert';

const initSweetalert = (selector, options = {},callback) => {
  const swalButton = document.querySelector('#sweet-alert-demo');
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', () => {
      swal(options).then(callback);
    });
  }
};

export { initSweetalert };
