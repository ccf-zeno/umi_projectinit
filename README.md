# 使用说明
***
配置文件放在config/local.config.js里面     
***
# 最基础的umi框架
集成  
eslint        代码检测工具  
prettier      代码格式化  
antd.v4          UI框架
lodash        JS快捷组件库
# 项目结构
config  配置
src
  -assets                 公共静态资源，各个页面都会用到的那种
  -components             公共组件，各个页面都会用到的那种
  -pages                  全部的页面
    -demo                 页面的名字
      -assets             私有静态资源，只有demo才用的
      -components         私有组件，只有demo才用的
      -services           私有请求路径，只有demo才用的
      -utils              私有方法，只有demo才用的
  -services               公共的请求路径，各个页面都会用到的那种
  -utils                  公共的方法，各个页面都会用到的那种

# 更新说明：
2020 4 27：更新UMI3X版本,ANTD4X版本全部切换到最新