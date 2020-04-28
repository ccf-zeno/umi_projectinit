# 使用说明
***
配置文件放在config/local.config.js里面     
建议使用格式：  
```
  {  
    feMicroService:{  // 中台的配置都放在这个对象下面
      xxxApi:{    // xxx代表某个微服务 比如你做的是 多维轨迹项目，则可取名为 dwgjApi，然后这个项目的所有配合都放在这个对象下
        url:"http://192.168.0.1:8000",
      }
    },
  }
```
用feMicroService包起来，这样可以不污染使用者的配置文件；
用xxxApi区分不同微服务，可以有效防止引入多个微服务造成的字段重复冲突；
***
# 最基础的umi框架
集成  
eslint---------代码检测工具  
prettier-------代码格式化  
commitlint-----commit检测工具  
config/--------配置文件目录  


# 更新说明：
2020 4 27：更新UMI3X版本,ANTD4X版本全部切换到最新