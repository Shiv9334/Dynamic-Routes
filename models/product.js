const fs = require("fs");
const { json } = require("body-parser");
let path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "product.json"
);

getProductsFromFile = (cb) => {
  fs.readFile(p, (err, filecontent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(filecontent));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    getProductsFromFile((products) => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          (prod) => prod.id === this.id
        );
        const updatedProduct = { ...products };
        updatedProduct[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProduct), (err) => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
      }
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
