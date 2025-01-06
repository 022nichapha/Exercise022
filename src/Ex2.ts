export class Customer {
    private id: number;
    private name: string;
    private discount: number;

    constructor(id: number, name: string, discount: number) {
        this.id = id;
        this.name = name;
        this.discount = discount;
    }

    // Getter methods
    public getID(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getDiscount(): number { 
        return this.discount;
    }

    public setDiscount(discount: number): void {
        this.discount = discount;
    }


    public toString(): string {
        return `ID: ${this.id}, Name: ${this.name}, Discount: ${this.discount}%`;
    }
}


export class Invoice {
    private id: number;
    private customer: Customer;
    private amount: number;

    constructor(id: number, customer: Customer, amount: number) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }

    // Getters and setters
    public getCustomer(): Customer {
        return this.customer;
    }

    public setCustomer(customer: Customer): void {
        this.customer = customer;
    }

    public getAmount(): number {
        return this.amount;
    }

    public setAmount(amount: number): void {
        this.amount = amount;
    }

    public getAmountAfterDiscount(): number {
        const discount = this.customer.getDiscount() / 100;
        return this.amount - (this.amount * discount);
    }


    public toString(): string {
        return `Invoice ID: ${this.id}, Customer: ${this.customer.getName()}, Amount: ${this.amount}`;
    }
}