const db = require("../util/database");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    return db.execute(
      "INSERT INTO products (title, price, imageUrl,description) VALUES (?,?,?,?)",
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }
};
