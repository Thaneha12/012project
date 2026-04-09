export interface IExpense{
    id:number;
    amount:number;
    category:string;
}
export let ExpenseMeta:[Date,string];
let transactionDate =new Date();
let description:string="Updated a total Amount";
ExpenseMeta=[transactionDate,description];
export class BasicExpense{
    id:number;
    amount:number;
    category:string;
    constructor(id:number,amount:number, category:string){
        this.id=id;
        this.amount=amount;
        this.category=category;
    }
    getSummary():void{
        console.log("Id",this.id);
        console.log("Amount",this.amount);
        console.log("Category",this.category);
    }
    
}
export class BusinessExpense extends BasicExpense{
    businessGST:string;
    constructor(id:number,amount:number,category:string,businessGST:string){
        super(id,amount,category);
        this.businessGST=businessGST;
    }
    getSummary(): void {
        console.log("Id",this.id);
        console.log("Amount",this.amount);
        console.log("Category",this.category);
        console.log("BusinessGST",this.businessGST);
    }
}



