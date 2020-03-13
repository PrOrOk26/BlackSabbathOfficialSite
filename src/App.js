import createElement from "./shared/components.js";
import NavigationBar from "./NavigationBar/NavigationBar.js";

const App = () => {
  const onNavbarToggle = e => {
    const navbar = document.getElementsByClassName("navbar")[0];
    const container = document.getElementsByClassName("container")[0];
    const trigger = document.getElementsByClassName("navigation-trigger")[0];
    const subcategories = [...document.getElementsByClassName("subcategories")];

    navbar.classList.toggle("navbar-active");
    container.classList.toggle("menu-opened");
    trigger.classList.toggle("open");
    subcategories && subcategories.forEach(elem => elem.classList.remove('active'));
  };

  return createElement(
    "div",
    {
      class: "container"
    },
    createElement("div", {
      class: "navbar-overlay",
      onclick: onNavbarToggle
    }),
    createElement("div", {
      class: "logo"
    }),
    createElement(
      "a",
      {
        class: "navigation-trigger",
        onclick: onNavbarToggle
      },
      createElement(
        "div",
        {
          class: "hamburger"
        },
        createElement("span", {}),
        createElement("span", {}),
        createElement("span", {}),
      ),
      createElement(
        "div",
        {
          class: "cross"
        },
        createElement("span", {}),
        createElement("span", {}),
      )
    ),
    NavigationBar({ onNavbarToggle: onNavbarToggle }),
    createElement("main", {
      class: "content"
    })
  );
};

export default App;
