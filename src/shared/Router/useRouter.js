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
    const routeResolved = resolveRoute(window.location.pathname);
    routeResolved();
  };

  document.addEventListener("DOMContentLoaded", runRouter);
  window.onpopstate = e => {
    runRouter(e)
  };

  const onNavItemClick = pathName => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
  };

  return { addComponentRenderer, addRoute, onNavItemClick };
};


export default useRouter;
