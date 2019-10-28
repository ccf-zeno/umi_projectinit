// 配置数据注入全局变量
window.hzConfig = Object.assign(
  (process && process.config) || {},
  window.hzConfig
);
