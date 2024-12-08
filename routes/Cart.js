const express = require("express");
const bodyparser = require("body-parser");
const Cart = require("../model/CartSchema");
const CartRouter = express.Router();
const client=require('../redis');

CartRouter.use(bodyparser.json());

CartRouter.get("/", async (req, res) => {
  try {
    const result = await client.get("carts");
    if (result) {
      const carts = JSON.parse(result);
      console.log("Redis stored data");
      res.render("cart", {
        carts: carts,
      });
    } else {
      const carts = await Cart.find({});
      await client.set("carts", JSON.stringify(carts));
      await client.expire("carts", 60);
      console.log("from server");
      res.render("cart", {
        carts: carts,
      });
    }
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

CartRouter.post("/", async (req, res) => {
  try {
    const result = await Cart.create({
      name: req.body.name,
      quantity: req.body.quantity,
    });
    res.status(200).json({ result: result });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = CartRouter;
