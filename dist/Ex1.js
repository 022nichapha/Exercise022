"use strict";
class Author {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getName() {
        return this.name; // ส่งชื่อออกไป เพราะเราเรียกใช้ Name
    }
    getEmail() {
        return this.email; // ส่ง email ออกไป เพราะเราเรียกใช้ email
    }
    setEmail(email) {
        this.email = email; // Email ที่เป็น แอททรีบิ้ว ถ้าเป็น email เฉยๆ จะหมายความว่าอยู่ใน Parameter
    }
    toString() {
        return "Author [name=" + this.name + ",\nEmail]=" + this.email;
    }
}
class Book {
    constructor(name, authors, price, qty = 0) {
        this.qty = 0;
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty;
    }
    getName() {
        return this.name;
    }
    getAuthors() {
        return this.authors;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getQty() {
        return this.qty;
    }
    setQty(qty) {
        this.qty = qty;
    }
    toString() {
        let details = "Book[name=\"" + this.name + "\" authors={";
        for (let i = 0; i < this.authors.length; i++) {
            details += this.authors[i].toString() + "],";
        }
        details += "}, price=" + this.price + ", qty=" + this.qty;
        return details;
    }
    getAuthorsNames() {
        let authorsNames = "";
        for (let i = 0; i < this.authors.length; i++) {
            authorsNames += this.authors[i].getName() + ",";
        }
        return authorsNames;
    }
}
module.exports = { Author, Book };
