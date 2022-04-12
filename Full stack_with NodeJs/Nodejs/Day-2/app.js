const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const productsRoutes = require("./routes/products");
const path = require("path");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));


/*
app.set("store", "app");
console.log(app.get("store"))
*/

app.set("view engine", "ejs"); // configurung ejs
app.set("views", "views");

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use("/product", productsRoutes);

app.use("/", (req, res) => {
    res.render("home", {user: "Aman"}); // res.send for html pages
});

app.listen(3000);