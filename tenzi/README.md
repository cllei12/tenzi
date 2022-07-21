# TENZI Game

## Quick Start
https://create-react-app.dev/docs/getting-started/

1. create a project with `create-react-app`
    ```shell
    # Need Node >= 14 on local development machine (but it’s not required on the server).
    # You can use `nvm` (macOS/Linux) to switch Node versions between different projects.
    
    # Create initial react app: npx or npm (both using npm to manage packages)
    npx create-react-app <app-name>  # npx comes with npm 5.2+ and higher
    npm init react-app my-app 

    cd <app-name>
    npm start  # Runs the app in development mode. Then open http://localhost:3000/ to see your app.
    npm test  # Runs the test watcher in an interactive mode. 
    ```

    > If you've previously installed create-react-app globally via `npm install -g create-react-app`, we recommend you uninstall the package using `npm uninstall -g create-react-app` or `yarn global remove create-react-app` to ensure that npx always uses the latest version.

2. When you’re ready to deploy to production, create a minified bundle with `npm run build` (Builds the app for production to the build folder. ).

## Dependencies
- [react-confetti](https://www.npmjs.com/package/react-confetti)

```shell
# `-S` | `--save`: Package will appear in your dependencies.  
# `-D` | `--save-dev`: Package will appear in your devDependencies.
npm install [--save | --save-dev] <package>
```
font: Karla

