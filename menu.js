const menuShow = document.querySelector('#menu');
const xButton = document.querySelector('.closeicon');

menuShow.addEventListener('click', () => {
  document.querySelector('.topmenu').classList.add('visible');
});

xButton.addEventListener('click', () => {
  document.querySelector('.topmenu').classList.remove('visible');
});

document.querySelectorAll('.nav-logo').forEach((n) => {
  n.addEventListener('click', () => {
    document.querySelector('.topmenu').classList.remove('visible');
  });
});
