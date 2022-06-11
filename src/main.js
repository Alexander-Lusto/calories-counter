import CounterComponent from './modules/counter';
import ResultComponent from "./modules/result";
import {render} from './utils/render';

const container = document.querySelector(`.container`);
const result = new ResultComponent();
const counter = new CounterComponent(result);

counter.setHandlers();
render(container, counter);
render(container, result);