import { IExpense,BasicExpense,BusinessExpense,ExpenseMeta } from "./ExpenseModule.js";
let total=0;
let val:number[];
function calculateTotal(val:number[]):number{
    
    for(let i=0;i<val.length;i++){
        total+=val[i];
    }
    return total;

}


let exp1:IExpense={
    id:1234,
    amount:5000,
    category:"BasicExpense"
};
let exp2:IExpense={
    id:5678,
    amount:6300,
    category:"BusinessExpense",
    
};
let basic=new BasicExpense(exp1.id,exp1.amount,exp1.category);
basic.getSummary();
let busi=new BusinessExpense(exp2.id,exp2.amount,exp2.category,"GSTER43687");
busi.getSummary();
val=[exp1.amount,exp2.amount];
console.log("Total Expense",calculateTotal(val));
console.log("Transaction Details");
for(let i=0;i<ExpenseMeta.length;i++){
    console.log(ExpenseMeta[i]);
}
