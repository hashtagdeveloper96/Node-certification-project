let express = require("express");
let mongoose = require("mongoose");
let app = express();
var productsRouter = require("./routes/product");
var usersRouter = require("./routes/user");
var adminRouter = require("./routes/admin");
var ordersRouter = require("./routes/order");
var User = require("./models/userModel");

var cors = require("cors");
var corsOptions = {
  origin: "http://localhost:4200",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect("mongodb://127.0.0.1:27017/projectdb", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/orders", ordersRouter);
app.use("/admin", adminRouter);

app.listen(5000, () => {
  console.log("Listening on port 5000");
});

module.exports = app;
