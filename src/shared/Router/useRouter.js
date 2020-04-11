import { match } from "path-to-regexp";

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

  const testRoutePath = (route) => {
    let result = {};

    Object.keys(routes).forEach((r) => {
      const matcher = match(r, { strict: false });
      const matchingResult = matcher(route);

      if (matchingResult) {
        result = {
          matchingResult,
          routeRenderer: routes[r],
        };
      }
    });
    return result;
  };

  const extractRouteQueryParameters = (queryString) => {
    if (!queryString) {
      return {};
    }
    const extractor = new URLSearchParams(queryString);

    const parameters = {};

    for(const [key, value] of extractor.entries()) {
      parameters[key] = value;
    }

    return parameters;
  };

  const resolveRoute = (route, queryString) => {
    try {
      const { matchingResult = null, routeRenderer = null } = testRoutePath(
        route
      );

      const queryStringParams = extractRouteQueryParameters(queryString);

      if (matchingResult && routeRenderer) {
        return () =>
          routeRenderer(
            { params: matchingResult.params, queryStringParams } ?? {}
          );
      } else {
        throw new Error("Matching error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const runRouter = (e) => {
    const routeResolved = resolveRoute(
      window.location.pathname,
      window.location.search
    );
    routeResolved();
  };

  document.addEventListener("DOMContentLoaded", runRouter);
  window.onpopstate = (e) => {
    runRouter(e);
  };

  const onNavItemClick = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
  };

  return { addComponentRenderer, addRoute, onNavItemClick };
};

export default useRouter;
