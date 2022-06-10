# web-projects
Learning web programming via some small projects.

| Project Name                                       | Date | Description                                                  |
| -------------------------------------------------- | ---- | ------------------------------------------------------------ |
| [Pricing Panel Project](basic/PricingPanelProject) | 9.11 | 用 html css 创建一个价格面板的网页 没有交互的 只是一个网页设计 <br/>From [The Web Developer Bootcamp 2021](https://www.udemy.com/course/the-web-developer-bootcamp/). |
| [Museum Of Candy](basic/Museum_Of_Candy)           | 9.11 | html css bootstrap (css library) 创建一个有menubar 的糖果网站 我自己改成了 usc配色的个人blog雏型 <br>From [The Web Developer Bootcamp 2021](https://www.udemy.com/course/the-web-developer-bootcamp/) 12. CSS Frameworks-Bootstrap |
| [Todo List](basic/TodoListProject)                 | 9.12 | 主要是 JavaScript，html就没写几行 创建一个可以展示list 添加事件 删除事件的可交互网页（结果都在console呈现） |
| [ScoreKeeper](basic/ScoreKeeper)                   | 9.17 | html css js bulma(js)<br/>Bulma is a **CSS library**. This means it provides CSS classes to help you style your HTML code. |

## React

React for free https://scrimba.com/learn/learnreact

### Install

- CDN -> global val `ReactDOM`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      function MyApp() {
        return <h1>Hello, world!</h1>;
      }

      const container = document.getElementById('root');
      const root = ReactDOM.createRoot(container);
      root.render(<MyApp />);
    </script>
    <!--
      Note: this page is a great way to try React but it's not suitable for production.
      It slowly compiles JSX with Babel in the browser and uses a large development build of React.

      Read this section for a production-ready setup with JSX:
      https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project

      In a larger project, you can use an integrated toolchain that includes JSX instead:
      https://reactjs.org/docs/create-a-new-react-app.html

      You can also use React without JSX, in which case you can remove Babel:
      https://reactjs.org/docs/react-without-jsx.html
    -->
  </body>
</html>
```



- Local js import 

```javascript
import React from "react"
import ReactDOM from "react-dom"
```

