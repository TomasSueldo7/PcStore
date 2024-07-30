document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const sideBar = document.getElementById('side-bar');
  const overlay = document.getElementById('overlay');
  const sideBarLinks = document.querySelectorAll('.side-bar a');

  function toggleSidebar() {
    sideBar.classList.toggle('show');
    overlay.classList.toggle('show');
  }

  function closeSidebar() {
    sideBar.classList.remove('show');
    overlay.classList.remove('show');
  }

  menuIcon.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', toggleSidebar);

  sideBarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
  });
});