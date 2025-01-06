const {Author,Book} = require("./Ex1");
const {Customer, Invoice} = require("./Ex2");


console.log("############ Ex1 ###########");
const author1 = new Author("nichapha Uttha", "664259022@webmail.npru.ac.th");
console.log(author1.toString());
const author2 = new Author("Udsname Pakdeetrakulwon","udsanee@webmail.npru.ac.th");
console.log(author2.toStsing());

const book1 = new Book("Basic Programming",[author1,author2],180,300 )
console.log(book1.toString());
console.log(book1.getAuthorsName());

console.log("#################");


console.log("############ Ex2 ###########");
const Customer1 = new Customer("nichapha Uttha", "664259022@webmail.npru.ac.th");
console.log(Customer1.toString());


const invoice1 = new Invoice (888,Customer1,8700)
console.log(invoice1.toString());

 require("./Ex3");
const student = new Student("Pailin", "16 Main", "Nakhon Pathom ", 2025, 15000);
const staff = new Staff("Bob", "456 Elm St", "XYZ School", 3000);

require("./Ex4");
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
