"use strict";
// คลาส Person
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    // Getter สำหรับ name
    getName() {
        return this.name;
    }
    // Getter สำหรับ address
    getAddress() {
        return this.address;
    }
    // Setter สำหรับ address
    setAddress(address) {
        this.address = address;
    }
    // แปลงข้อมูล Person ให้อยู่ในรูปแบบข้อความ
    toString() {
        return `Person[name=${this.name},address=${this.address}]`;
    }
}
// คลาส Student (สืบทอดจาก Person)
class Student extends Person {
    constructor(name, address, program, year, fee) {
        super(name, address); // เรียกใช้ constructor ของคลาสแม่ (Person)
        this.program = program;
        this.year = year;
        this.fee = fee;
    }
    // Getter สำหรับ program
    getProgram() {
        return this.program;
    }
    // Setter สำหรับ program
    setProgram(program) {
        this.program = program;
    }
    // Getter สำหรับ year
    getYear() {
        return this.year;
    }
    // Setter สำหรับ year
    setYear(year) {
        this.year = year;
    }
    // Getter สำหรับ fee
    getFee() {
        return this.fee;
    }
    // Setter สำหรับ fee
    setFee(fee) {
        this.fee = fee;
    }
    // แปลงข้อมูล Student ให้อยู่ในรูปแบบข้อความ
    toString() {
        return `Student[${super.toString()},program=${this.program},year=${this.year},fee=${this.fee}]`;
    }
}
// คลาส Staff (สืบทอดจาก Person)
class Staff extends Person {
    constructor(name, address, school, pay) {
        super(name, address); // เรียกใช้ constructor ของคลาสแม่ (Person)
        this.school = school;
        this.pay = pay;
    }
    // Getter สำหรับ school
    getSchool() {
        return this.school;
    }
    // Setter สำหรับ school
    setSchool(school) {
        this.school = school;
    }
    // Getter สำหรับ pay
    getPay() {
        return this.pay;
    }
    // Setter สำหรับ pay
    setPay(pay) {
        this.pay = pay;
    }
    // แปลงข้อมูล Staff ให้อยู่ในรูปแบบข้อความ
    toString() {
        return `Staff[${super.toString()},school=${this.school},pay=${this.pay}]`;
    }
}
