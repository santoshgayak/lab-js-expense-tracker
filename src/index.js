// Entry
class Entry {
    constructor(date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super(date, amount, description);
    }
    type = "income";
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid){
        super(date, amount, description,);
        this.paid = paid;
    }
    type = "expense";
 
    getFormattedAmount() {
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor(){ }
    entries = [];
    
    addEntry(entry){
        this.entries.push(entry);
    }

    getCurrentBalance(){
        if(this.entries.length === 0) return 0;
        let totalIncome = 0;
        let totalExpense = 0;
        this.entries.forEach( entry => {
            if( entry.type === "income") {
                totalIncome += entry.amount;
            }else if( entry.type === "expense"){
                totalExpense += entry.amount;
            } 
        })
        return totalIncome - totalExpense;
    }

 

     getFormattedEntries(){
        return this.entries.map(entry =>
            (`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`)
        )
     }


}
