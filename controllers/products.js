const Product = require("../models/product.js");
exports.getAddProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    res.redirect("/");
  }
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
    editing: editMode,
  });
};

exports.postAddProduct = (req, res, next) => {
  const imageUrl = req.body.imageUrl;
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  req.user.createProduct();
  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description,
    userId: req.user.id,
  })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
};

exports.getProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
