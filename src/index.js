import { testFunction } from "./testing";
import '../scss/index.scss';

console.log("shit, this is actually working!");

const mainDiv = document.getElementsByTagName("div")[0];
const newButton = document.createElement("button");
newButton.innerText = "Get black sabbath!";
newButton.setAttribute("value", "Get black sabbath!");
newButton.setAttribute("name", "Get black sabbath!");

mainDiv.appendChild(newButton);

const test = undefined;

const test2 = test ?? "This does work!!!";
const test3 = document.createElement("h1");
test3.innerText = test2;
// mainDiv.appendChild(test3);

testFunction();
