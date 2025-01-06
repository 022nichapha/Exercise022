// คลาส Person
class Person {
  private name: string;
  private address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }

  // Getter สำหรับ name
  public getName(): string {
    return this.name;
  }

  // Getter สำหรับ address
  public getAddress(): string {
    return this.address;
  }

  // Setter สำหรับ address
  public setAddress(address: string): void {
    this.address = address;
  }

  // แปลงข้อมูล Person ให้อยู่ในรูปแบบข้อความ
  public toString(): string {
    return `Person[name=${this.name},address=${this.address}]`;
  }
}

// คลาส Student (สืบทอดจาก Person)
class Student extends Person {
  private program: string;
  private year: number;
  private fee: number;

  constructor(name: string, address: string, program: string, year: number, fee: number) {
    super(name, address); // เรียกใช้ constructor ของคลาสแม่ (Person)
    this.program = program;
    this.year = year;
    this.fee = fee;
  }

  // Getter สำหรับ program
  public getProgram(): string {
    return this.program;
  }

  // Setter สำหรับ program
  public setProgram(program: string): void {
    this.program = program;
  }

  // Getter สำหรับ year
  public getYear(): number {
    return this.year;
  }

  // Setter สำหรับ year
  public setYear(year: number): void {
    this.year = year;
  }

  // Getter สำหรับ fee
  public getFee(): number {
    return this.fee;
  }

  // Setter สำหรับ fee
  public setFee(fee: number): void {
    this.fee = fee;
  }

  // แปลงข้อมูล Student ให้อยู่ในรูปแบบข้อความ
  public toString(): string {
    return `Student[${super.toString()},program=${this.program},year=${this.year},fee=${this.fee}]`;
  }
}

// คลาส Staff (สืบทอดจาก Person)
class Staff extends Person {
  private school: string;
  private pay: number;

  constructor(name: string, address: string, school: string, pay: number) {
    super(name, address); // เรียกใช้ constructor ของคลาสแม่ (Person)
    this.school = school;
    this.pay = pay;
  }

  // Getter สำหรับ school
  public getSchool(): string {
    return this.school;
  }

  // Setter สำหรับ school
  public setSchool(school: string): void {
    this.school = school;
  }

  // Getter สำหรับ pay
  public getPay(): number {
    return this.pay;
  }

  // Setter สำหรับ pay
  public setPay(pay: number): void {
    this.pay = pay;
  }

  // แปลงข้อมูล Staff ให้อยู่ในรูปแบบข้อความ
  public toString(): string {
    return `Staff[${super.toString()},school=${this.school},pay=${this.pay}]`;
  }
}
