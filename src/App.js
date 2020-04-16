import createElement from "./shared/components.js";
import useRouter from "./shared/Router/useRouter.js";
import NavigationBar from "./NavigationBar/NavigationBar.js";
import LandingPage from "./LandingPage/LandingPage.js";
import DiscographyComponent from "./DiscographyComponent/DiscographyComponent.js";
import RecordComponent from "./RecordComponent/RecordComponent.js";
import NewsComponent from "./NewsComponent/NewsComponent.js";
import VideosComponent from "./VideosComponent/VideosComponent.js";
import PhotosComponent from "./PhotosComponent/PhotosComponent.js";
import EventsComponent from "./EventsComponent/EventsComponent.js";

const App = () => {
  const { addRoute, onNavItemClick } = useRouter();

  addRoute("/", () => {
    const mainContent = document.getElementsByClassName("content")[0];

    if (mainContent) {
      mainContent.innerHTML = "";
      mainContent.append(...LandingPage().children);
    }

    twttr.ready(() => {
      twttr.widgets.load(document.getElementsByClassName("twitter")[0]);
    });
  });

  addRoute("/discography", (props) => {
    const mainContent = document.getElementsByClassName("content")[0];

    if (mainContent) {
      mainContent.innerHTML = "";
      mainContent.append(...DiscographyComponent(props).children);
    }
  });

  addRoute("/discography/:discid", (props) => {
    const mainContent = document.getElementsByClassName("content")[0];

    if (mainContent) {
      mainContent.innerHTML = "";
      mainContent.append(...RecordComponent(props).children);
    }
  });

  addRoute("/news", (props) => {
    const mainContent = document.getElementsByClassName("content")[0];

    if (mainContent) {
      mainContent.innerHTML = "";
      mainContent.append(...NewsComponent(props).children);
    }
  });

  addRoute("/videos", (props) => {
    const mainContent = document.getElementsByClassName("content")[0];

    if (mainContent) {
      mainContent.innerHTML = "";
      mainContent.append(...VideosComponent(props).children);
    }
  });

  addRoute("/photos", (props) => {
    const mainContent = document.getElementsByClassName("content")[0];

    if (mainContent) {
      mainContent.innerHTML = "";
      mainContent.append(...PhotosComponent(props).children);
    }
  });

  addRoute("/past", async (props) => {
    const mainContent = document.getElementsByClassName("content")[0];

    const eventsData = await import("./EventsComponent/eventsData.js");

    if (mainContent) {
      mainContent.innerHTML = "";
      mainContent.append(
        ...EventsComponent({
          ...props,
          type: "past",
          events: eventsData.pastEvents,
        }).children
      );
    }
  });

  addRoute("/upcoming", async (props) => {
    const mainContent = document.getElementsByClassName("content")[0];

    const eventsData = await import("./EventsComponent/eventsData.js");

    if (mainContent) {
      mainContent.innerHTML = "";
      mainContent.append(
        ...EventsComponent({
          ...props,
          type: "upcoming",
          events: eventsData.upcomingEvents,
        }).children
      );
    }
  });

  const onNavbarToggle = (e) => {
    const navbar = document.getElementsByClassName("navbar")[0];
    const container = document.getElementsByClassName("container")[0];
    const trigger = document.getElementsByClassName("navigation-trigger")[0];
    const subcategories = [...document.getElementsByClassName("subcategories")];

    navbar.classList.toggle("navbar-active");
    container.classList.toggle("menu-opened");
    trigger.classList.toggle("open");

    if (subcategories) {
      subcategories.forEach((elem) => elem.classList.remove("active"));
    }
  };

  return (
    <div class="container">
      <div class="main-image" />
      <div class="navbar-overlay" onclick={onNavbarToggle}></div>
      <a class="logo" href="/" />
      <a class="navigation-trigger" onclick={onNavbarToggle}>
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="cross">
          <span></span>
          <span></span>
        </div>
      </a>
      {NavigationBar({ onNavbarToggle, onNavItemClick })}
      <main class="content"></main>
    </div>
  );
};

export default App;
