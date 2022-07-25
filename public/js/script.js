// Preloader
function showPage() {
  document.getElementById(`loader`).style.display = `none`;
  document.getElementById(`content`).style.display = `flex`;
}

window.addEventListener(`DOMContentLoaded`, () => {
  showPage();
});

// Navbar - Trigger Highlight
const highlightMenu = () => {
  if (isUrlSearch()) {
    const searchMenu = document.querySelector(`#navbar__search`);
    const latestMenu = document.querySelector(`#navbar__latest`);
    let scrollPosition = window.scrollY;
    const highlight = `highlight`;

    console.log(scrollPosition);
    console.log(window.location.href);
    const isHamburgerMenuOff = window.innerWidth > 768 ? true : false;

    // checks if hamburger menu is active

    if (isHamburgerMenuOff && scrollPosition < 600) {
      searchMenu.classList.add(highlight);
      latestMenu.classList.remove(highlight);
    } else if (isHamburgerMenuOff && scrollPosition < 5000) {
      latestMenu.classList.add(highlight);
      searchMenu.classList.remove(highlight);
    } else {
      latestMenu.classList.remove(highlight);
      searchMenu.classList.remove(highlight);
    }
  }
};

function isUrlSearch() {
  const herokuURL = `https://search-news-web.herokuapp.com/search`;
  const localURL = `http://localhost:8080/search`;
  const currentURL = window.location.href;

  if (currentURL === herokuURL || currentURL === localURL) {
    return false;
  }

  return true;

/*
  return window.location.href === `http://localhost:8080/search`
    ? true
    : false;
*/
}

window.addEventListener(`scroll`, highlightMenu);
window.addEventListener(`click`, highlightMenu);

// Hamburger Menu
const hamburger = document.querySelector(`.navbar__hamburger`);
const navbarMenu = document.querySelector(`.navbar__menu`);

function mobileMenu() {
  hamburger.classList.toggle(`active`);
  navbarMenu.classList.toggle(`active`);
}

hamburger.addEventListener(`click`, mobileMenu);
navbarMenu.addEventListener(`click`, mobileMenu);
