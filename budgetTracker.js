
// const userName = "Mostafijur Rhaman";
// const income = 30000;
// const expence = 25000;

// console.log('personal budget tracker app');
// console.log('User: ' + userName.toUpperCase() );
// console.log('Total Income: $' + income);
// console.log('Total Expenses: $' + expence);



 // Ask for user input dynamically
const userName = prompt("Enter Your Name: ");
const income = parseFloat(prompt("Enter Your total income: "));


// Ask how many expenses the user has
const numberOfExpenses = parseInt(prompt("How many expanses do you have?"));

let totalExpenses = 0;

//validate inputes to ensre they are numbers
if(
    isNaN(income) || isNaN(numberOfExpenses) || income <= 0 || numberOfExpenses < 0){
    console.log('Invalid input. Please enter valid numbers.')
}else{
    

    //collect expenses dynamically
    for (let i = 1; i <= numberOfExpenses; i++){
        const expenses =[];
        let expense = parseFloat(prompt(`Enter expense ${i}: `));

        if(
            isNaN(expense) || 
            expense <0
        ){
            console.log(`Invalid input for expense ${i}, setting it to $0`);
            expense = 0;
        }
        expenses.push(expense);
        // calculate total expenes using array
        for (let index=0; index<expenses.length; index++){
            totalExpenses += expenses[index];
        }
    }
}


// Tax deduction (10%)
const tax = income * 0.1;

// Net income after the tax
const netIcome = income - tax;

// Calculate remaining balance
const balance = netIcome - totalExpenses;

// Savings (20% of remaining balance)
const savings = balance * 0.2;

//Determine the financial health status
let finalStatus = '';

if (savings>= 1000){
    finalStatus='Exclent! You are saving well!';
}
else if (savings>= 500){
    finalStatus='Good! You are saving well!';
}
else if (savings>= 100){
    finalStatus='Needs Improvement. Consider reducing expenses.';
}
else{
    finalStatus='Critical! Your savings are too low!';
}

//Check if expenses exceed income
let overspendingMessage = '';
if(totalExpenses>income){
    overspendingMessage = 'Warning: You are spending more than yout income!'
}


console.log('personal budget tracker app');
console.log(`User: ` + userName);
 console.log(`Total Income: $${income}`);
 console.log(`Total Expenses: $${totalExpenses}`);
 console.log(`Tax Deducted (10%): $${tax}`);
 console.log(`Net Incime After Tax: $${netIcome}`);
 console.log(`Remaining Balance: $${balance}(in 2025)`);
 console.log(`Savings: $${savings}`);
 console.log(finalStatus);
 console.log(`hi 
     bye`)
if (overspendingMessage){
    console.log(overspendingMessage);
}
