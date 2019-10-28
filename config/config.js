/* eslint-disable */
import routes from "./router.config";

const path = require("path");
const localconfig = require("./local.config");
const rootdir = path.join(__dirname, "..");

export default {
  treeShaking: true,
  targets: {
    ie: 10, // 兼容ie10
  },
  outputPath: "/dist", // 打包目录
  define: {
    "process.config": localconfig, // 暴露全局变量
  },
  disableRedirectHoist: true, // 禁止重定向上提
  alias: {
    // 配置自定义快捷引入文件路径
    "@components": path.resolve(rootdir, "src/components/"),
    "@utils": path.resolve(rootdir, "src/utils/"),
    "@assets": path.resolve(rootdir, "src/assets"),
    "@services": path.resolve(rootdir, "src/services/"),
    "@config": path.resolve(rootdir, "config/"),
  },
  routes, // 路由
  plugins: [
    // 插件
    [
      "umi-plugin-react",
      {
        antd: false,
        dva: true,
        dynamicImport: false,
        title: "系统标题",
        dll: false,
      },
    ],
  ],
};
