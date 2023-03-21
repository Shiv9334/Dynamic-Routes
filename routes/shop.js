const path = require("path");

const express = require("express");

let productController = require("../controller/products.js");
const router = express.Router();

router.get("/", productController.getProduct);

module.exports = router;
