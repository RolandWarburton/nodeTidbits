# Express and Webpack Boilerplate App
Building modern websites that are fast ⚡

This is an experiment in creating websites that are compiled with modern bundlers like webpack,
But at the same time remain closer to web 1.0 or 2.0 in leveraging the simplicity of static content. 

The perfect balance i want is learning how to use modern tools to bundle websites that are still lightweight and as fast as (reasonably) possible. This boilerplate will use Express as a static server and use webpack as a static site generator (SSG), as opposed to running everything though a client side rendering frontend framework. In fact i would like to avoid frontend frameworks for all but the biggest projects that i might do, only using them when actually required.

## Express Server
A WIP server. This was attempt 1, it doesnt work well.

## Static Site Generator
This uses webpack as a bundler and some new techniques i learnt to create multi-page static sites using a templating language.

### TODO
- [ ] Gut 'express-server' to just the express part and add my 'static-site-generator' code to it
- [ ] research spdy and how i can use it with my SSG to make my sites even faster?
- [x] Find a way to do multi-pages
- [x] templating language?
- [ ] Document and fully understand how this boilerplate works

### Graveyard
HMR isnt something that i need for this project. A simpler solution is to use webpack-dev-server.
- [x] understand HMR (HotModuleReplacement)
  - [x] Read about the [easier way](https://github.com/jantimon/html-webpack-plugin/issues/218)
  - [x] Read about the cooler but [harder way](https://extri.co/2017/07/11/generating-multiple-html-pages-with-htmlwebpackplugin/)