const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Blog = require("./models/blog.js");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Blog');
};

//Index Route
app.get("/blogs", async(req,res) => {
  let blogs = await Blog.find();
  res.render("index.ejs", {blogs});
});

//New Route
app.get("/blogs/new", (req,res) => {
  res.render("new.ejs");
});

//Creat Route
app.post("/blogs", (req,res) => {
  let {title, author, blog} = req.body;

  let newBlog = new Blog ({
    title : title,
    author : author,
    blog : blog,
    created_at : new Date
  });

  newBlog.save()
  .then((res) => {
    console.log("Blog was saved");
  })
  .catch((err) => {
    console.log(err);
  });

  res.redirect("/blogs");
});

//Edit Route
app.get("/blogs/:id/edit", async (req,res) => {
  let {id} = req.params;
  let blog = await Blog.findById(id);
  res.render("edit.ejs", {blog});
});

//Update Route
app.put("/blogs/:id", async (req,res) => {
  let {id} = req.params;
  let {blog:newBlog} = req.body;
  let updatedBlog = await Blog.findByIdAndUpdate(
    id,
    {blog : newBlog},
    {runValidators: true, new: true}
  );

  console.log("Updated blog");
  res.redirect("/blogs");
});

//Delete Route
app.delete("/blogs/:id", async (req,res) => {
  let {id} = req.params;
  let deletedBlog = await Blog.findByIdAndDelete(id);

  console.log(deletedBlog);
  res.redirect("/blogs");
});

app.get("/",(req,res) => {
  res.send("Root is working");
});

app.listen(8080, (req,res) => {
    console.log("Server is listening on port 8080");
});