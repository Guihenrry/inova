import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuList = document.querySelector('[data-menu="list"]');
  const menuButton = document.querySelector('[data-menu="button"]');

  function openMenu() {
    menuList.classList.add('active');
    menuButton.classList.add('active');
    outsideClick(menuList, ['click'], () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    });
  }

  if (menuButton) {
    menuButton.addEventListener('click', openMenu);
  }
}
