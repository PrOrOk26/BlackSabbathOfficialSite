import createElement from "../components.js";
import { match } from "path-to-regexp";

export const redirect = (route) => {
  window.location.replace(route);
};

const useRouter = () => {
  const routes = {};
  const componentRenderers = {};

  const onNavItemClick = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
  };

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
    let routeSingleSlashes = route.replace(/\/\/+/g, "/");

    Object.keys(routes).forEach((r) => {
      const matcher = match(r, { strict: false });
      const matchingResult = matcher(routeSingleSlashes);

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

    for (const [key, value] of extractor.entries()) {
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
      if (error.message === "Matching error") {
        return () => redirect("/404");
      }
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

  return { addComponentRenderer, addRoute, onNavItemClick };
};

export default useRouter;
