import { getElement, addOpenedClassName } from './utils';

export default function Navigation(burgerClassName, navClassName) {
  const burgerElement = getElement(burgerClassName);
  const navElement = getElement(navClassName);

  const onBurgerClick = () => {
    burgerElement.classList.toggle(addOpenedClassName(burgerClassName));
    navElement.classList.toggle(addOpenedClassName(navClassName));
  };

  burgerElement.addEventListener('click', () => onBurgerClick());
}
