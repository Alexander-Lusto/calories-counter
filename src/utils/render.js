export const createElement = (template) => {
  const parent = document.createElement(`div`);
  parent.innerHTML = template.trim();
  return parent.firstChild;
};

export const render = (container, component, place = `beforeend`) => {
  const element = component.getElement();
  container.insertAdjacentElement(place, element);
};