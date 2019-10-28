const { routePrefix } = require("./local.config");

const route = [
  {
    path: "/",
    component: "./index.js",
  },
];

route.forEach(data => {
  const v = data;
  v.path = routePrefix + v.path;
});
module.exports = route;
