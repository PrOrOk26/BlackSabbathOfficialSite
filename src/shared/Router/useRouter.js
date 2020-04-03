const useRouter = () => {
  const routes = {};
  const componentRenderers = {};

  const addComponentRenderer = (name, componentRenderer) => {
    return (componentRenderers[name] = componentRenderer);
  };

  const addRoute = (path, componentRenderer) => {
    if (typeof componentRenderer == "function") {
      return (routes[path] = componentRenderer);
    } else if (typeof componentRenderer == "string") {
      return (routes[path] = componentRenderers[componentRenderer]);
    } else {
      return;
    }
  };

  const resolveRoute = route => {
    try {
      return routes[route];
    } catch (error) {
      throw new Error("The route is not defined");
    }
  };

  const runRouter = e => {
    const url = window.location.hash.slice(1) || "/";
    const routeResolved = resolveRoute(url);
    routeResolved();
  };


  window.addEventListener("hashchange", e => {
    debugger;
    e.preventDefault();
    runRouter();
  });

  window.addEventListener("popstate", event => {
    debugger;
    event.preventDefault();
    runRouter();
  });

  window.onload = () => {
    runRouter();
    const anchors = [...document.getElementsByTagName("a")];

    anchors.forEach(a => {
      a.addEventListener("click", e => {
        const url = e.path[1].href ?? "";
        debugger;

        if (url) {
          window.history.pushState({ url }, `Black Sabbath`, "/discography/");
        }
        runRouter();
      });
    });
  };

  return { addComponentRenderer, addRoute };
};

export default useRouter;
