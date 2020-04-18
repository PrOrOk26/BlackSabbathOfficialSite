import createElement from "./shared/components.js";
import useRouter, { redirect } from "./shared/Router/useRouter.js";
import NavigationBar from "./NavigationBar/NavigationBar.js";
import LandingPage from "./LandingPage/LandingPage.js";
import DiscographyComponent from "./DiscographyComponent/DiscographyComponent.js";
import RecordComponent from "./RecordComponent/RecordComponent.js";
import NewsComponent from "./NewsComponent/NewsComponent.js";
import VideosComponent from "./VideosComponent/VideosComponent.js";
import PhotosComponent from "./PhotosComponent/PhotosComponent.js";
import EventsComponent from "./EventsComponent/EventsComponent.js";
import NoMatchComponent from "./NoMatchComponent/NoMatchComponent.js";

const App = () => {
  const { addRoute, onNavItemClick } = useRouter();

  const renderMainContent = (ComponentToRender) => {
    const mainContent = document.getElementsByClassName("content")[0];

    try {
      if (mainContent) {
        mainContent.innerHTML = "";
        mainContent.append(...ComponentToRender().children);
      }
    } catch(e) {
      if(e.message === '404') {
        redirect('/404');
        return;
      } 
      console.error(e);
    }
  };

  addRoute("/", (props) => {
    renderMainContent(() => LandingPage(props));

    twttr.ready(() => {
      twttr.widgets.load(document.getElementsByClassName("twitter")[0]);
    });
  });

  addRoute("/discography", (props) => {
    renderMainContent(() => DiscographyComponent(props));
  });

  addRoute("/discography/:discid", (props) => {
    renderMainContent(() => RecordComponent(props));
  });

  addRoute("/news", (props) => {
    renderMainContent(() => NewsComponent(props));
  });

  addRoute("/videos", (props) => {
    renderMainContent(() => VideosComponent(props));
  });

  addRoute("/photos", (props) => {
    renderMainContent(() => PhotosComponent(props));
  });

  addRoute("/past", async (props) => {
    const eventsData = await import("./EventsComponent/eventsData.js");
    renderMainContent(() =>
      EventsComponent({
        ...props,
        type: "past",
        events: eventsData.pastEvents,
      })
    );
  });

  addRoute("/upcoming", async (props) => {
    const eventsData = await import("./EventsComponent/eventsData.js");
    renderMainContent(() =>
      EventsComponent({
        ...props,
        type: "upcoming",
        events: eventsData.upcomingEvents,
      })
    );
  });

  addRoute("/404", (props) => {
    renderMainContent(() => NoMatchComponent(props));
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
      <footer>
        <a href="/" class="logo" />
        <div class="footer__copyright">
          <p>© Black Sabbath</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
