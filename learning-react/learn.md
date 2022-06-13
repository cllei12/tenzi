Node

run a local js env, the gobal object is `global`

```
➜  static page git:(main) node
Welcome to Node.js v17.8.0.
Type ".help" for more information.

process
process.argv
```

```
node xxx.js

node i -g xxx
node link xxx


node install # default install all dependencies based on package.json
```



## [Create a new React App](https://reactjs.org/docs/create-a-new-react-app.html#recommended-toolchains)

- If you’re **learning React** or **creating a new [single-page](https://reactjs.org/docs/glossary.html#single-page-application) app,** use [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app).

- If you’re building a **server-rendered website with Node.js,** try [Next.js](https://reactjs.org/docs/create-a-new-react-app.html#nextjs).

  [Server-Side Render (SSR)](https://zhuanlan.zhihu.com/p/41856333)

- If you’re building a **static content-oriented website,** try [Gatsby](https://reactjs.org/docs/create-a-new-react-app.html#gatsby).

- If you’re building a **component library** or **integrating with an existing codebase**, try [More Flexible Toolchains](https://reactjs.org/docs/create-a-new-react-app.html#more-flexible-toolchains).

  

### package manager + bundler + compiler (npm + [webpack](https://webpack.js.org/) + [Babel](https://babeljs.io/))

> https://zhuanlan.zhihu.com/p/102087731 
>
> 配置 webpack: webpack.config.js + 配置 babel: .babelrc 
>
> https://stackoverflow.com/questions/56098779/how-to-fix-module-build-failed-from-node-modules-babel-loader-lib-index-js 
>
> babel-loader@8.x uses Babel 7.x, which is @babel/core@^7.0.0, and more importantly in your case @babel/preset-env@7 replaces babel-preset-env@^1.7.0.

React 不能拿来就用 要先搭建 toolchains, e.g. [static_page_toolchains](./static_page_toolchains)

自己搭建也是可以 但是很麻烦 create-react-app 就是把这些搭建过程给你弄好



### create-react-app

```bash
# ./ = "learning-react"
npx create-react-app static_page_cra

:<<'COMMENT'
Success! Created static_page_cra at /Users/lei/Desktop/web-projects/learning-react/static_page_cra
Inside that directory, you can run several commands:
	npm start
    Starts the development server.

	npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd static_page_cra
  npm start
COMMENT
```

NOTE: react project  (folder) name can't contain upper letters.  [Why can't React project name contain capital letters?](https://stackoverflow.com/questions/59159553/why-cant-react-project-name-contain-capital-letters)

```bash
# ./static_page_cra
├── package-lock.json
├── package.json
├── node_modules
│   ├──  ...
│   └──
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js # If you want to start measuring performance in your app, pass a function to log results (for example: reportWebVitals(console.log)) or send to an analytics endpoint.
    ├── setupTests.js  # jest-dom adds custom jest matchers for asserting on DOM nodes.
    └── style.css
```

