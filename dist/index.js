"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Author, Book } = require("./Ex1");
//const {Customer, Invoice} = require("./Ex2");
console.log("############ Ex1 ###########");
const author1 = new Author("nichapha Uttha", "664259022@webmail.npru.ac.th");
console.log(author1.toString());
const author2 = new Author("Udsname Pakdeetrakulwon", "udsanee@webmail.npru.ac.th");
console.log(author2.toStsing());
const book1 = new Book("Basic Programming", [author1, author2], 180, 300);
console.log(book1.toString());
console.log(book1.getAuthorsName());
console.log("#################");
const Ex2_1 = require("./Ex2");
const customer1 = new Ex2_1.Customer(1, "nichapha Uttha", 0.1);
console.log(customer1);
const invoice1 = new Ex2_1.Invoice(888, Ex2_1.Customer, 8700);
console.log(invoice1.toString());
console.log("############ Ex3 ###########");
const student = new Student("Pailin", "16 Main", "Nakhon Pathom ", 2025, 15000);
const staff = new Staff("Bob", "456 Elm St", "XYZ School", 3000);
console.log("############ Ex4 ###########");
const shape = new Shape("blue", false);
console.log(shape.toString());
const circle = new Circle(2.5, "green", true);
console.log(circle.toString());
console.log(`Area: ${circle.getArea()}`);
console.log(`Perimeter: ${circle.getPerimeter()}`);
const rectangle = new Rectangle(2.0, 3.0, "yellow", true);
console.log(rectangle.toString());
console.log(`Area: ${rectangle.getArea()}`);
console.log(`Perimeter: ${rectangle.getPerimeter()}`);
const square = new Square(4.0, "purple", false);
console.log(square.toString());
console.log(`Area: ${square.getArea()}`);
console.log(`Perimeter: ${square.getPerimeter()}`);
