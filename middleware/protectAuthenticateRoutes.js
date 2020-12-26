import RoutesList from "../assets/routesList";

const RoutesMiddleWareFunctions = {
  register(global) {
    if (global.store.state.userToken) {
      global.redirect("/");
    }
  },
  private(global) {
    if (!global.store.state.userToken) {
      global.redirect("/login");
    }
  },
  vip(global) {
    if (!global.store.state.userToken || !global.store.state.vip) {
      alert("vip members just can enter this page!!");
      global.redirect("/");
    }
  }
};
// ba in middleware har chand ta route type ke doos dari mitoonid ezafe konid mesle alan ke
// ye type vip ba condition motefavet ijad kardam
export default global => {
  const { route } = global;
  const pageName = route.name;
  const pageType = Object.keys(RoutesList).find(routeType =>
    RoutesList[routeType].includes(pageName)
  );
  const pageTypeFN = RoutesMiddleWareFunctions[pageType];
  if (pageTypeFN) {
    pageTypeFN(global);
  }
};
