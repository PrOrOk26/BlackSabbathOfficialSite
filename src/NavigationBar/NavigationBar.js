import createElement from "../shared/components.js";
import TwitterIcon from "../assets/images/twitter.svg";
import FacebookIcon from "../assets/images/facebook.svg";
import InstagramIcon from "../assets/images/instagram.svg";
import YoutubeIcon from "../assets/images/youtube.svg";
import IconLink from "./assets/downArrow.svg";

const NavigationBar = (props) => {
  const { onNavbarToggle, onNavItemClick } = props;

  const menuElements = [
    {
      name: "The band",
      subElements: [
        { name: "Discography", url: "/discography/" },
      ],
    },
    {
      name: "Events",
      subElements: [
        { name: "Past", url: "/past/" },
        { name: "Upcoming", url: "/upcoming/" },
      ],
    },
    {
      name: "News",
      url: "/news/",
    },
    {
      name: "Media",
      subElements: [
        {
          name: "Videos",
          url: "/videos",
        },
        {
          name: "Photos",
          url: "/photos",
        },
      ],
    },
    {
      name: "Shop",
      subElements: [
        { name: "US", url: "https://blacksabbathapparelshop.com/" },
        { name: "Canada", url: "https://blacksabbathapparelshop.com/" },
        {
          name: "Germany",
          url: "https://blacksabbath.bravado.de/",
        },
        {
          name: "ITunes",
          url:
            "https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?path=blacksabbath",
        },
      ],
    },
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: FacebookIcon,
      url: "https://www.facebook.com/BlackSabbath",
    },
    {
      name: "Twitter",
      icon: TwitterIcon,
      url: "https://twitter.com/blacksabbath",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://www.instagram.com/blacksabbath/",
    },
    {
      name: "YouTube",
      icon: YoutubeIcon,
      url: "https://www.youtube.com/channel/UCrx-X329UKv0Y06VhfpFVvw",
    },
  ];

  return createElement(
    "nav",
    { class: "navbar" },
    createElement(
      "ul",
      {
        class: "navbar__categories",
      },
      ...menuElements.map((elem, index) => {
        return createElement(
          "li",
          {
            class: "main-category",
          },
          createElement(
            "a",
            {
              class: "main-category__link",
              href: elem.url,
              onclick:
                elem.subElements &&
                ((e) => {
                  const subcategoriesContainer = e.currentTarget.parentElement.getElementsByClassName(
                    "subcategories"
                  )[0];
                  const linkIcon = e.currentTarget.getElementsByClassName("link-icon")[0];

                  if (subcategoriesContainer) {
                    subcategoriesContainer.classList.toggle("subcategories--active");
                    linkIcon.classList.toggle("link-icon--active");
                  }
                }),
            },
            createElement("span", {
              innerText: elem.name,
            }),
            elem.subElements && createElement("img", {
              class: 'link-icon',
              src: IconLink,
            }),
          ),
          elem.subElements &&
            createElement(
              "ul",
              {
                class: "subcategories",
              },
              ...elem.subElements.map((subcategory) =>
                createElement(
                  "li",
                  {
                    class: "subcategory",
                  },
                  createElement(
                    "a",
                    {
                      class: "subcategory__link",
                      href: subcategory.url ?? "#",
                      target: elem.name === "Shop" ? "_blank" : "",
                      onclick: (e) => {
                        onNavItemClick(subcategory.url ?? "#");
                      },
                    },
                    createElement("span", {
                      innerText: subcategory.name,
                    })
                  )
                )
              )
            )
        );
      })
    ),
    createElement(
      "div",
      {
        class: "social-media",
      },
      createElement("span", {
        class: "social-media__header-text",
        innerText: "Follow us on social media",
      }),
      createElement(
        "ul",
        {},
        ...socialMedia.map((elem) => {
          return createElement(
            "li",
            {},
            createElement(
              "a",
              {
                href: elem.url,
                target: "_blank",
              },
              createElement(
                "i",
                {},
                createElement("span", {
                  class: "visually-hidden",
                  innerText: elem.name,
                }),
                createElement("img", {
                  class: "sm-icon",
                  src: elem.icon,
                  alt: elem.name,
                })
              )
            )
          );
        })
      )
    )
  );
};

export default NavigationBar;
