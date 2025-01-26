require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const blogRoutes = require("./routes/blog.js");
const userRoutes = require("./routes/user.js");
const bodyParser = require("body-parser");
const connectDB = require("./config/db.js");
const expressFileUpload = require("express-fileupload");

// mongo db connection
connectDB();

// body parser middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressFileUpload());

app.get("/api", (req, res) => {
  res.status(200).json({ message: "welcome to pluralcode blog" });
});

app.use("/api/blogs", blogRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`server running on port ${port}`));
