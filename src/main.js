import CounterComponent from './modules/counter';
import {render} from './utils/render';

const container = document.querySelector(`.container`);
const counter = new CounterComponent();

counter.setInputsChangeHandler();
render(container, counter);