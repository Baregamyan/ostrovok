import { getElement } from './utils';

function onNavToggle(navElement, navOpenedClass) {
  navElement.classList.toggle(navOpenedClass);
}

export default function Nav(navClassName) {
  const navElement = getElement(navClassName);
  const openedNavClassName = `${navClassName}--opened`;
  onNavToggle(navElement, openedNavClassName);
}
