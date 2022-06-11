import CounterComponent from './modules/counter';
import ResultComponent from "./modules/result";
import {render} from './utils/render';

const container = document.querySelector(`.container`);
const result = new ResultComponent(container);
const counter = new CounterComponent(result);


counter.setInputsChangeHandler();
counter.setPhysicalActivityRadioChangeHandler();
counter.setGenderInputChangeHandler();
counter.setSubmitButtonClickHandler();
render(container, counter);
render(container, result);