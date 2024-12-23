class Author {

    private name: string
    private email: string

    constructor(name: string, email: string){
        this.name = name
        this.email = email
    }
    public getName():string {
        return this.name // ส่งชื่อออกไป เพราะเราเรียกใช้ Name
    }
    public getEmail():string{
        return this.email // ส่ง email ออกไป เพราะเราเรียกใช้ email
    }
    public setEmail(email:string){
        this.email = email// Email ที่เป็น แอททรีบิ้ว ถ้าเป็น email เฉยๆ จะหมายความว่าอยู่ใน Parameter
    }
    public toString():string{ // ส่งชื่อ ส่งอีเมลล์ เข้าไป
        return "Author [name="+this.name+",\nEmail]="+this.email;
    }

}

class Book{
 private name:string;
 private authors:Author[];
 private price:number;
 private qty:number = 0;

 constructor(name:string,authors:Author[],price:number, qty:number = 0){
    this.name = name;
    this.authors= authors;
    this.price = price
    this.qty = qty
 }
 public getName():string{
    return this.name;
 }
 public getAuthors():Author[]{
    return this.authors;
 }
 public getPrice():number{
    return this.price
 }
 public setPrice(price:number):void{
    this.price = price;
 }
 public getQty():number{
    return this.qty
 }
 public setQty(qty:number):void{
    this.qty = qty;
 }
public toString():string{
    let details = "Book[name=\""+this.name+"\" authors={";
    for(let i=0; i<this.authors.length;i++){
        details += this.authors[i].toString()+ "],"
    }
    details += "}, price="+this.price+", qty="+this.qty;
    return details
}
public getAuthorsNames():string{
    let authorsNames = "";
    for(let i=0; i<this.authors.length;i++){
        authorsNames += this.authors[i].getName()+ ","
    }
    return authorsNames;
}
}


export = {Author,Book}; //ส่ง ออก ไฟล์ export

