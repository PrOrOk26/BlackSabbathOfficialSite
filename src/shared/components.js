const createElement = (type, attributes = {}, ...children) => {
  try {
    if (typeof type !== "string") {
      throw {
        type: "SyntaxError",
        message: "You should specify a type of an element!"
      };
    }

    let domElem = document.createElement(type);

    if (typeof domElem === "HTMLUnknownElement") {
      throw {
        type: "SyntaxError",
        message: "Invalid DOM element type specified!"
      };
    }

    domElem = children.reduce((domElem, child) => {
      if (child) {
        domElem.appendChild(child);
      }
      return domElem;
    }, domElem);

    domElem = Object.entries(attributes).reduce((domElem, attribute) => {
      if (attribute[0] === "innerText") {
        domElem.innerText = attribute[1];
      } else if (attribute[0].startsWith("on") && attribute[1]) {
        domElem[attribute[0]] = attribute[1];
      } else if (attribute[0]) {
        domElem.setAttribute(attribute[0], attribute[1] ?? "");
      }
      return domElem;
    }, domElem);

    return domElem;
  } catch (error) {
    if (error.type === "SyntaxError") {
      console.error(error.message ?? "");
    }
  }
};

export default createElement;
