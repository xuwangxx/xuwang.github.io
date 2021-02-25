This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## `yarn`

下载依赖

### `yarn start`

运行开发环境<br />
打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看。

### `yarn test`

在交互式监视模式下启动测试运行程序。<br />

### `yarn build`

将用于生产的应用程序生成到“build”文件夹。<br />
它在生产模式下正确地进行反应，并优化构建以获得最佳性能。
构建被缩小，文件名包含哈希。<br />
你的应用程序已准备好部署！

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

如果您对构建工具和配置选项不满意，可以随时`eject`。此命令将从项目中删除单个生成依赖项。
相反，它会将所有配置文件和可传递的依赖项（Webpack、Babel、ESLint等）直接复制到您的项目中，这样您就可以完全控制它们。除`eject`之外的所有命令都将继续工作，但它们将指向复制的脚本，以便您可以调整它们。现在你只能靠自己了。

你不必使用`eject`。curated特性集适合中小型部署，您不应该觉得有义务使用此特性。但是，我们知道，如果您在准备就绪时无法自定义此工具，则此工具将不会有用。

## `yarn deploy`

将项目部署在github上

```javascript
    "scripts": {
        ...
        "deploy": "gh-pages -d build -b master",
    },
```
`gh-pages -d build -b master`: deploy 在远程仓库创建一个名为gh-pages,并将代码打包成可运行的前端页面项目运行在master上