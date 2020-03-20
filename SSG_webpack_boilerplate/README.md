# SSG Webpack Boilerplate App
Building modern websites that are fast ⚡

This is an experiment in creating websites that are compiled with modern bundlers like webpack, 
but remain simple with static only assets.

The learning objective is to gain understanding of how to use modern tools to bundle websites. And build a static site generator that is lightweight and as fast as (reasonably) possible. This boilerplate will use nginx as a static server and use webpack as the bundler for a static site generator (SSG), as opposed to running everything though a client side rendering frontend framework. In fact i would like to avoid frontend frameworks for all but the biggest projects that i might do, only using them when actually required.

## Static Site Generator vs Server Side Rendering
The difference between SSG and SSR is the ability for SSR to have access to the user agent. This allows for server responses to be dynamic, for example building and returning different components based on the user. 

SSG is more limited that SSR, however it is simpler to understand and develop for when making small sites that dont require dynamic content (user logins, dynamic components, and other content generated on the fly). So a SSG can deliver small bundles and html/css/js that can run faster than SSR.


### TODO
- [x] Gut 'express-server' to just the express part and add my 'static-site-generator' code to it
- [ ] research spdy/HTTP2 and how i can use it with my SSG to make my sites even faster?
- [x] Find a way to do multi-pages
- [x] templating language?
- [ ] Document and fully understand how this boilerplate works

### Graveyard
HMR isnt something that i need for this project. A simpler solution is to use webpack-dev-server.
- [x] understand HMR (HotModuleReplacement)
  - [x] Read about the [easier way](https://github.com/jantimon/html-webpack-plugin/issues/218)
  - [x] Read about the cooler but [harder way](https://extri.co/2017/07/11/generating-multiple-html-pages-with-htmlwebpackplugin/)