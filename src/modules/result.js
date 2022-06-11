import {createElement} from '../utils/render';

const HIDDEN_CLASS = `counter__result--hidden`;
const createResultTemplate = (calories) => {
  calories = calories ? calories : 0;
  return(`
    <section class="counter__result ${calories ? `` : `counter__result--hidden`}">
      <h2 class="heading">
        Ваша норма калорий
      </h2>
      <ul class="counter__result-list">
        <li class="counter__result-item">
          <h3>
            <span id="calories-norm">${Math.round(calories)}</span> ккал
          </h3>
          <p>
            поддержание веса
          </p>
        </li>
        <li class="counter__result-item">
          <h3>
            <span id="calories-minimal">${Math.round(calories - calories * 0.15)}</span> ккал
          </h3>
          <p>
            снижение веса
          </p>
        </li>
        <li class="counter__result-item">
          <h3>
            <span id="calories-maximal">${Math.round(calories + calories * 0.15)}</span> ккал
          </h3>
          <p>
            набор веса
          </p>
        </li>
      </ul>
    </section>
  `);
}

export default class Result {
  constructor (container) {
    this._container = container;
    this._calories = null;
    this._element = null;
    this.hiddenMode = true;
  }

  update(calories) {
    this._calories = calories;
    console.log(this._calories);

    this.removeElement();
    this.getElement();
    this._container.insertAdjacentElement(`beforeend`, this._element);
  }

  show(calories) {
    if (this._calories === calories) return;
    this._calories = calories;
    this.update(calories);
    

    this._element.classList.remove(HIDDEN_CLASS);
    this.hiddenMode = false;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate(this._calories));
    }

    return this._element;
  }

  removeElement() {
    this._element.remove();
    this._element = null;
  }

  getTemplate() {
    return createResultTemplate(this._calories);
  }
}