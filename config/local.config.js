const merge = require("lodash.defaultsdeep");
/**
 * 配置（本地环境）
 */

module.exports = merge({
  feMicroService: {
    // 中台的配置都放在这个对象下面
    xxxApi: {
      // xxx代表某个微服务 比如你做的是 多维轨迹项目，则可取名为 dwgjApi，然后这个项目的所有配合都放在这个对象下
      url: "http://192.168.0.1:8000",
    },
  },
  routePrefix: "", // 路由统一前缀
});
