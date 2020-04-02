import createElement from "./shared/components.js";
import App from './App.js';
import './shared/index.js';
import "core-js/stable";
import "regenerator-runtime/runtime";

import './index.scss';

const test = App();
document.body.appendChild(test);

