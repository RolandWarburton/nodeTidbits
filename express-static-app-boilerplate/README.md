# Express and Webpack Boilerplate App
Building modern websites that are fast ⚡

This is an experiment in creating websites that are compiled with modern bundlers like webpack,
But at the same time remain closer to web 1.0 or 2.0 in leveraging the simplicity of static content. 

The perfect balance i want is learning how to use modern tools to bundle websites that are still lightweight and as fast as (reasonably) possible. This boilerplate will use Express as a static server (SSR), as opposed to client side rendering frontend frameworks. In fact i would like to avoid frontend frameworks for all but the biggest projects that i might do, only using them when actually required. Though in future i might want to use a templating language such as EJS or Handlebars for either making developing websites easier, or as a way to tick off multi-page support which i am yet to learn how to do with HtmlWebpackPlugin [see here](https://extri.co/2017/07/11/generating-multiple-html-pages-with-htmlwebpackplugin/).

### TODO
- [ ] Find a way to do multi-pages
- [ ] understand HMR (HotModuleReplacement)
  - [ ] Read about the [easier way](https://github.com/jantimon/html-webpack-plugin/issues/218)
  - [ ] Read about the cooler but [harder way](https://extri.co/2017/07/11/generating-multiple-html-pages-with-htmlwebpackplugin/)
- [ ] Document and fully understand how this boilerplate works
- [ ] templating language?