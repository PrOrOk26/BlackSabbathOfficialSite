const createElement = (type, attributes = {}, ...children) => {
  try {
    if(type === "video") {
      debugger;
    }
    const elem = Object.assign(document.createElement(type), attributes);

    if (elem.class) {
      elem.classList.add(...elem.class.split(" "));
    }

    Object.entries(elem)
      .filter(([key, ]) => key.startsWith("data-"))
      .forEach(([key, value]) => elem.setAttribute(key, value));

    for (const child of children) {
      if (!child) continue;
      if (Array.isArray(child)) elem.append(...child);
      else elem.append(child);
    }
    return elem;
  } catch (error) {
    if (error.type === "SyntaxError") {
      console.error(error.message ?? "");
    }
  }
};

export default createElement;
