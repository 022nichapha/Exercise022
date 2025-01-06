class Customer {
  private name: string;
  private isMember: boolean = false;
  private memberType: string | null = null;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  getMemberType(): string | null {
    return this.memberType;
  }

  setMemberType(type: string): void {
    this.memberType = type;
  }
}
class Visit {
  private customer: Customer;
  private date: Date;
  private serviceExpense: number = 0.0;
  private productExpense: number = 0.0;

  constructor(customer: Customer, date: Date) {
    this.customer = customer;
    this.date = date;
  }

  getCustomer(): Customer {
    return this.customer;
  }

  getServiceExpense(): number {
    return this.serviceExpense;
  }

  setServiceExpense(expense: number): void {
    this.serviceExpense = expense;
  }

  getProductExpense(): number {
    return this.productExpense;
  }

  setProductExpense(expense: number): void {
    this.productExpense = expense;
  }

  getTotalExpense(): number {
    return this.serviceExpense + this.productExpense;
  }
}
