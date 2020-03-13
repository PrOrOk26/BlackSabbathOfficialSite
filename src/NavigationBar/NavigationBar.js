import createElement from "../shared/components.js";

const NavigationBar = props => {
  const { onNavbarToggle } = props;

  const menuElements = [
    {
      name: "The band",
      subElements: [
        { name: "Discography" },
        { name: "History" },
        { name: "Awards" }
      ]
    },
    {
      name: "Events",
      subElements: [{ name: "Past" }, { name: "Upcoming" }]
    },
    {
      name: "News"
    },
    {
      name: "Media",
      subElements: [{ name: "Videos" }, { name: "Photos" }]
    },
    {
      name: "Shop",
      subElements: [
        { name: "US" },
        { name: "Canada" },
        { name: "Germany" },
        { name: "France" },
        { name: "ITunes" },
        { name: "Rest of the world" }
      ]
    }
  ];

  return createElement(
    "nav",
    { class: "navbar" },
    createElement(
      "ul",
      {
        class: "navbar__categories"
      },
      ...menuElements.map((elem, index) => {
        return createElement(
          "li",
          {
            class: "main-category"
          },
          createElement(
            "a",
            {
              class: "main-category__link",
              href: "#",
              onclick: elem.subElements && (e => {
                const subcategoriesContainer = e.path.find(elem => elem.className === 'main-category').getElementsByClassName(
                  "subcategories"
                )[0];
                if (subcategoriesContainer) {
                  subcategoriesContainer.classList.toggle("active");
                }
              })
            },
            createElement("span", {
              innerText: elem.name
            })
          ),
          elem.subElements &&
            createElement(
              "ul",
              {
                class: "subcategories"
              },
              ...elem.subElements.map(subcategory =>
                createElement(
                  "li",
                  {
                    class: "subcategory"
                  },
                  createElement(
                    "a",
                    {
                      class: "subcategory__link",
                      href: "#"
                    },
                    createElement("span", {
                      innerText: subcategory.name
                    })
                  )
                )
              )
            )
        );
      })
    )
  );
};

export default NavigationBar;
