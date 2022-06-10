import CounterComponent from './modules/counter';
import ResultComponent from './modules/result';
import {render} from './utils/render';

const container = document.querySelector(`.container`);
const counter = new CounterComponent(container);
const result = new ResultComponent();

render(container, counter);
render(container, result);