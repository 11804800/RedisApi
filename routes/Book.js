const express = require("express");
const bodyparser = require("body-parser");
const Books = require("../model/BookSchema");
const BookRouter = express.Router();
const client = require("../redis");

BookRouter.use(bodyparser.json());

BookRouter.get("/", async (req, res) => {
  try {
    const result = await client.get("books");
    if (result) {
      const books=JSON.parse(result);
      console.log("Redis stored data");
      res.render("book", {
        books: books
      });
    } else {
      const books = await Books.find({});
      await client.set("books",JSON.stringify(books));
      await client.expire("books",100);
      console.log("from server");
      res.render("book", {
        books: books
      });
    }
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

BookRouter.post("/", async (req, res) => {
  try {
    const result = await Books.create({
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
    });
    res.status(200).json({ result: result });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = BookRouter;
