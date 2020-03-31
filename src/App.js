import createElement from "./shared/components.js";
import NavigationBar from "./NavigationBar/NavigationBar.js";
import DiscographyComponent from "./DiscographyComponent/DiscographyComponent.js";
import BackgroundImage from "./assets/background.png";

const uris = {
  getDiscography: "https://localhost:5001/api/Records"
};

const fetchCovers = async () => {
  const response = await fetch(uris["getDiscography"]);
  const json = await response.json();
  return json;
};

const App = () => {
  const onNavbarToggle = e => {
    const navbar = document.getElementsByClassName("navbar")[0];
    const container = document.getElementsByClassName("container")[0];
    const trigger = document.getElementsByClassName("navigation-trigger")[0];
    const subcategories = [...document.getElementsByClassName("subcategories")];

    navbar.classList.toggle("navbar-active");
    container.classList.toggle("menu-opened");
    trigger.classList.toggle("open");
    subcategories &&
      subcategories.forEach(elem => elem.classList.remove("active"));
  };

  try {
    fetchCovers().then(covers => {
      const coversElement = document.getElementsByClassName("covers")[0];

      if (coversElement) {
        covers.forEach(cover => {
          debugger;
          const shit = createElement(
            "div",
            {
              class: "record"
            },
            createElement("span", {
              innerText: cover.recordName
            }),
            createElement("img", {
              src: cover.recordCover
            }),
          );
          debugger;
          return coversElement.appendChild(
            shit
          );
        });
      } else {
        coversElement.appendChild("No covers were loaded");
      }
    });
  } catch (err) {
    console.error(err);
  }

  return createElement(
    "div",
    {
      class: "container"
    },
    createElement(
      "div",
      {
        class: "background"
      },
      createElement("img", {
        src: BackgroundImage
      })
    ),
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
        createElement("span", {})
      ),
      createElement(
        "div",
        {
          class: "cross"
        },
        createElement("span", {}),
        createElement("span", {})
      )
    ),
    NavigationBar({ onNavbarToggle: onNavbarToggle }),
    createElement(
      "main",
      {
        class: "content"
      },
      DiscographyComponent()
    )
  );
};

export default App;
