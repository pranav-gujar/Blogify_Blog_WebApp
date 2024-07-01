const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Blog');
};

let allBlogs = [
  {
    title: "Exploring the Hidden Gems of Kyoto",
    author: " Emily Tanaka",
    blog: "This blog post delves into some lesser-known attractions in Kyoto, Japan, providing travel tips, historical background, and personal anecdotes. From hidden temples to secret gardens, the post aims to guide readers to unique and off-the-beaten-path experiences.",
    created_at: new Date()
  },
  {
    title: "The Future of Renewable Energy: Innovations and Trends",
    author: "David Green",
    blog: "An in-depth look at the latest advancements in renewable energy technologies. This post covers emerging trends in solar, wind, and hydroelectric power, as well as innovations in energy storage and smart grid technologies. It also discusses the potential impacts of these advancements on the environment and global economy.",
    created_at: new Date()
  },
  {
    title: "Mastering Mindfulness: Techniques for Daily Practice",
    author: "Sophia Patel",
    blog: "This blog post offers practical advice for incorporating mindfulness into daily routines. It includes various techniques such as meditation, mindful breathing, and body scans. The post also explores the benefits of mindfulness for mental health, stress reduction, and overall well-being.",
    created_at: new Date()
  }
];

Blog.insertMany(allBlogs);