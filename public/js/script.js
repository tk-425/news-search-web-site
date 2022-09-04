// Preloader
function showPage() {
  document.getElementById(`loader`).style.display = `none`;
  document.getElementById(`content`).style.display = `flex`;
}

window.addEventListener(`DOMContentLoaded`, () => {
  showPage();
});

// Back to Top Button
const topButton = document.querySelector(`#top__button`);
const activateTopButton = () => {
  let scrollPosition = window.scrollY;

  console.log(scrollPosition);

  if (scrollPosition < 900) {
    topButton.classList.remove(`show`);
  } else {
    topButton.classList.add(`show`);
  }
};

window.addEventListener(`scroll`, activateTopButton);
topButton.addEventListener(`click`, (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
});

// Navbar - Trigger Highlight
const highlightMenu = () => {
  if (isUrlSearch()) {
    const searchMenu = document.querySelector(`#navbar__search`);
    const latestMenu = document.querySelector(`#navbar__latest`);
    let scrollPosition = window.scrollY;
    const highlight = `highlight`;
    const isHamburgerMenuOff = window.innerWidth > 768 ? true : false;

    // checks if hamburger menu is active & scroll position
    if (isHamburgerMenuOff && scrollPosition < 600) {
      searchMenu.classList.add(highlight);
      latestMenu.classList.remove(highlight);
    } else if (
      isHamburgerMenuOff &&
      scrollPosition < document.body.scrollHeight
    ) {
      latestMenu.classList.add(highlight);
      searchMenu.classList.remove(highlight);
    } else {
      latestMenu.classList.remove(highlight);
      searchMenu.classList.remove(highlight);
    }
  }
};

function isUrlSearch() {
  const serverURL = `https://search-news-web.herokuapp.com/`;
  const localURL = `http://localhost:8080/`;
  const searchTag = `#search`;
  const latestTag = `#latest--news`;
  const urlList = [
    serverURL,
    localURL,
    serverURL + searchTag,
    localURL + searchTag,
    serverURL + latestTag,
    localURL + latestTag,
  ];
  const currentURL = window.location.href;

  return urlList.indexOf(currentURL) !== -1;
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
