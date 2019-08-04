# Webpack test

### What is webpack?
Compiles modules into static assets.
takes modules (like npm modules) and packages it into static files for a server.

![webpack explanation](https://i.imgur.com/AW4uVjh.png)

## installing webpack
Install globally:
```npm install -g webpack```

Takes all the generated code and loads it into the browser locally for development:
```npm install Webpack-dev-server```


### What is a module
You can 'require' any js file with WP. usually grouped by functionality.
Modules should be reusable.

### codesplitting
Breaks the codebase up into chunks which can load in on demand

### loaders
loaders can be used to transform other resources into JS
##### Example loaders:
* css abd sass
* JSX (react)
* babel (es6 to es5)
* coffee
* typescript
* EJS, pug (jade), handlebars
* json