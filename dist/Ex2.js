"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = exports.Customer = void 0;
class Customer {
    constructor(id, name, discount) {
        this.id = id;
        this.name = name;
        this.discount = discount;
    }
    // Getter methods
    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getDiscount() {
        return this.discount;
    }
    setDiscount(discount) {
        this.discount = discount;
    }
    toString() {
        return `ID: ${this.id}, Name: ${this.name}, Discount: ${this.discount}%`;
    }
}
exports.Customer = Customer;
class Invoice {
    constructor(id, customer, amount) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }
    // Getters and setters
    getCustomer() {
        return this.customer;
    }
    setCustomer(customer) {
        this.customer = customer;
    }
    getAmount() {
        return this.amount;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    getAmountAfterDiscount() {
        const discount = this.customer.getDiscount() / 100;
        return this.amount - (this.amount * discount);
    }
    toString() {
        return `Invoice ID: ${this.id}, Customer: ${this.customer.getName()}, Amount: ${this.amount}`;
    }
}
exports.Invoice = Invoice;
