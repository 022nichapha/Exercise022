"use strict";
class Customer {
    constructor(name) {
        this.isMember = false;
        this.memberType = null;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getMemberType() {
        return this.memberType;
    }
    setMemberType(type) {
        this.memberType = type;
    }
}
class Visit {
    constructor(customer, date) {
        this.serviceExpense = 0.0;
        this.productExpense = 0.0;
        this.customer = customer;
        this.date = date;
    }
    getCustomer() {
        return this.customer;
    }
    getServiceExpense() {
        return this.serviceExpense;
    }
    setServiceExpense(expense) {
        this.serviceExpense = expense;
    }
    getProductExpense() {
        return this.productExpense;
    }
    setProductExpense(expense) {
        this.productExpense = expense;
    }
    getTotalExpense() {
        return this.serviceExpense + this.productExpense;
    }
}
