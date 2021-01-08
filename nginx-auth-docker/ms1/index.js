const express = require("express");
// const isAuthenticated = require("./middleware/isAuthenticated");
const session = require("express-session");
const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 100000,
    },
  })
);

app.listen(8080, () => {
  // console.log("auth listening on 8080");
});

app.get("*", [], (req, res, next) => {
  // console.log("auth", new Date());
  console.log("serving ms1 content");
  return res.status(200).send("ms1");
});
