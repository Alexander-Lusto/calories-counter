import CounterComponent from './components/counter';
import ResultComponent from "./components/result";
import {render} from './utils/render';

const container = document.querySelector(`.container`);
const resultComponent = new ResultComponent();
const counterComponent = new CounterComponent(resultComponent);

counterComponent.setHandlers();
render(container, counterComponent);
render(container, resultComponent);