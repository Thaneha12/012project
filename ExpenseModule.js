export let ExpenseMeta;
let transactionDate = new Date();
let description = "Updated a total Amount";
ExpenseMeta = [transactionDate, description];
export class BasicExpense {
    id;
    amount;
    category;
    constructor(id, amount, category) {
        this.id = id;
        this.amount = amount;
        this.category = category;
    }
    getSummary() {
        console.log("Id", this.id);
        console.log("Amount", this.amount);
        console.log("Category", this.category);
    }
}
export class BusinessExpense extends BasicExpense {
    businessGST;
    constructor(id, amount, category, businessGST) {
        super(id, amount, category);
        this.businessGST = businessGST;
    }
    getSummary() {
        console.log("Id", this.id);
        console.log("Amount", this.amount);
        console.log("Category", this.category);
        console.log("BusinessGST", this.businessGST);
    }
}
