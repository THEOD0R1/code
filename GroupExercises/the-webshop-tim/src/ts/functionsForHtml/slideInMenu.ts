export function openNav(openNavigation: HTMLElement) {
  openNavigation.classList.add("headerNavClicked");
}

export function closeNav(openNavigation: HTMLElement) {
  openNavigation.classList.remove("headerNavClicked");
}
