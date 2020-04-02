const Router = () => {
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

  return { addComponentRenderer, addRoute, runRouter };
};

export default Router;
