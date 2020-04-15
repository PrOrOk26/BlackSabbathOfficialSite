const filterAttributes = (atrObj) => {
  const newObj = {};

  for (const [key, value] of Object.entries(atrObj)) {
    if (value !== undefined) {
      newObj[key] = value;
    }
  }

  return newObj;
};

const createElement = (type, attributes = {}, ...children) => {
  try {
    const elem = Object.assign(
      document.createElement(type),
      attributes && filterAttributes(attributes)
    );

    if (elem.class) {
      elem.classList.add(...elem.class.split(" "));
    }

    Object.entries(elem)
      .filter(([key]) => key.startsWith("data-"))
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
