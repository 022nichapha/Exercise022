const {Author,Book} = require("./Ex1");
console.log("############ Ex1 ###########");
const author1 = new Author("nichapha Uttha", "664259022@webmail.npru.ac.th");
console.log(author1.toString());
const author2 = new Author("Udsname Pakdeetrakulwon","udsanee@webmail.npru.ac.th");
console.log(author2.toStsing());

const book1 = new Book("Basic Programming",[author1,author2],180,300 )
console.log(book1.toString());
console.log(book1.getAuthorsName());


console.log("#################");

