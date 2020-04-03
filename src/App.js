import createElement from "./shared/components.js";
import useRouter from "./shared/Router/useRouter.js";
import NavigationBar from "./NavigationBar/NavigationBar.js";
import LandingPage from "./LandingPage/LandingPage.js";
import DiscographyComponent from "./DiscographyComponent/DiscographyComponent.js";
import BackgroundImage from "./assets/images/background.jpg";

const App = () => {
  const { addRoute } = useRouter();
  const contentHeight = 1800;

  addRoute("/", () => {
    const mainContent = document.getElementsByClassName('content')[0];

    debugger;
    if(mainContent) {
      mainContent.innerHTML = "";
      mainContent.innerHTML = LandingPage().innerHTML;
    }

    twttr.widgets.load(document.getElementsByClassName("twitter")[0]);
  });

  addRoute("discography/", () => {
    const mainContent = document.getElementsByClassName('content')[0];

    debugger;
    if(mainContent) {
      mainContent.innerHTML = "";
      mainContent.innerHTML = LandingPage().innerHTML;
    }

    twttr.widgets.load(document.getElementsByClassName("twitter")[0]);
  });

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

  return (
    <div class="container">
      <div class="main-image" />
      <div class="navbar-overlay" onclick={onNavbarToggle}></div>
      <div class="logo" />
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
      {NavigationBar({ onNavbarToggle: onNavbarToggle })}
      <main style={`height: ${contentHeight}px`} class="content">
      </main>
    </div>
  );
};

export default App;
