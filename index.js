const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use("/static", express.static("static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routerVisitor = require("./routes/visitor");
app.use("/visitor", routerVisitor);

const routerGuest = require("./routes/guest");
app.use("/guest", routerGuest);

const routerUser = require("./routes/user");
app.use("/user", routerUser);

const routerNeu = require("./routes/neu");
app.use("/neu", routerNeu);

app.listen(port, () => {
  console.log("Server Port : ", port);
});
