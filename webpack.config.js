const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './components.js', // 入口js文件
  output: {
    filename: 'index.js', // 输出的名字
    path: path.resolve(__dirname, 'dist'), // 输出的目录
    library:'test',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    libraryExport: 'default', // 兼容 ES6 的模块系统、CommonJS 和 AMD 模块规范
  },
  resolve:{
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      utils: path.resolve(__dirname, 'src/utils'),
      assets: path.resolve(__dirname, 'src/assets'),
      services: path.resolve(__dirname, 'src/services'),
      src: path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      ie: '10',
                    },
                  },
                ],
                '@babel/preset-react' 
              ],
              plugins:[
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                ["@babel/plugin-proposal-class-properties"],
              ]
            },
          },
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",   // 纯css文件不做任何标识符的引入
          'postcss-loader',
        ],  
      },
      {
        test: /\.less/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]-components-[hash:base64]',
              }
            }
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: { 
              lessOptions: {
                javascriptEnabled:true,
                modifyVars: {
                  hack: `true; @import "~@hz-design/base/es/themes/default.less";`, //  把特殊的less文件引入
                },  
              } ,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,   // 单位为字节
              outputPath: 'assets/'
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({  // css分离
      filename: 'css/index.css'
    }),
    new CleanWebpackPlugin(), // 清空打包目录
  ],
  externals: { // 定义外部依赖，避免把react和react-dom打包进去
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  },
};