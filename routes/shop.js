const path = require("path");
const express = require("express");
const shopController = require("../controllers/shop");
const router = express.Router();
router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get("/product/:productId", shopController.gtProduct);

router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart);

router.get("/orders", shopController.getOrders);

module.exports = router;
