import {createElement} from '../utils/render';
import {render} from '../utils/render';

const HIDDEN_CLASS = `counter__result--hidden`;
const createResultTemplate = (calories) => {
  return(`
    <section class="counter__result counter__result--hidden">
      <h2 class="heading">
        Ваша норма калорий
      </h2>
      <ul class="counter__result-list">
        <li class="counter__result-item">
          <h3>
            <span id="calories-norm">${calories}</span> ккал
          </h3>
          <p>
            поддержание веса
          </p>
        </li>
        <li class="counter__result-item">
          <h3>
            <span id="calories-minimal">${calories - calories * 0.15}</span> ккал
          </h3>
          <p>
            снижение веса
          </p>
        </li>
        <li class="counter__result-item">
          <h3>
            <span id="calories-maximal">${calories + calories * 0.15}</span> ккал
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
  constructor () {
    this._calories = null;
    this._element = null;
    this.hiddenMode = true;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
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