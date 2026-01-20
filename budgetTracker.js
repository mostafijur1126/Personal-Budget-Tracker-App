


//Function to get user inpute
function getUserInput(promptMassage, isNumber=false){
    const userInput = prompt(promptMassage);
    return isNumber ? parseFloat(userInput) : userInput;
}

function getExpenses(numberOfExpenses){
    const expenses =[];
    //collect expenses dynamically
    for (let i = 1; i <= numberOfExpenses; i++){
        
        let expense = getUserInput(`Enter expense ${i}: `, true);

        if(
            isNaN(expense) || 
            expense <0
        ){
            console.log(`Invalid input for expense ${i}, setting it to $0`);
            expense = 0;
        }
        expenses.push(expense);
    }
    return expenses;
}

function calculateTotalExpenses(expenses){
    // calculate total expenes using array
    let totalExpenses = 0;
    for (let index=0; index<expenses.length; index++){
    totalExpenses += expenses[index];
    }
    return totalExpenses;
}

function calculateTax(income,taxRate){
    return income * taxRate;
}
function calculateNetIncome(income,tax){
    return income - tax;
}
function calculateBalance(netIcome,totalExpenses){
    return netIcome - totalExpenses;
}
function calculateSaving(balance,savingPercentage){
    return balance * savingPercentage;
}
function getFinancialStatus(savings){
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
    return finalStatus;
}

function displayResults(userBudget){
    


    console.log('personal budget tracker app');
    console.log(`User: ` + userBudget.userName);
    console.log(`Total Income: $${userBudget.income}`);
    console.log(`Total Expenses: $${userBudget.totalExpenses}`);
    console.log(`Tax Deducted (10%): $${userBudget.tax}`);
    console.log(`Net Incime After Tax: $${userBudget.netIcome}`);
    console.log(`Remaining Balance: $${userBudget.balance}(in 2025)`);
    console.log(`Savings: $${userBudget.savings}`);
    console.log(finalStatus);

    const overspendingMessage = checkOverSpanding(userBudget);
    if (overspendingMessage){
    console.log(overspendingMessage);
    }
    console.log('Expense Breakdown:');
    for (let index = 0; index < userBudget.expense.length; index++){
        console.log(`Expense ${index + 1} : $${userBudget.expenses[index]}`);
    }
        
}

function checkOverSpanding(userBudget){
    //Check if expenses exceed income
    return userBudget.totalExpenses > userBudget.income? 'Warning: You are spending more than yout income!' : '';
}

//function to calulate financial details
function calculateBudget(userBudget){
        userBudget.expenses = getExpenses(userBudget.numberOfExpenses);

        userBudget.totalExpenses = calculateTotalExpenses(userBudget.expenses);
        
        // Tax deduction (10%)
        userBudget.tax = calculateTax(userBudget.income, 0.1);

        // Net income after the tax
        userBudget.netIcome = calculateNetIncome(userBudget.income, userBudget.tax);

        // Calculate remaining balance
        userBudget.balance = calculateBalance(userBudget.netIcome,userBudget.totalExpenses);

        // Savings (20% of remaining balance)
        userBudget.savings = calculateSaving(userBudget.balance, 0.2);

        //Determine the financial health status
        userBudget.finalStatus = getFinancialStatus(userBudget.savings);
}


//Main function to the run the budget tracker 
function runBudgetTracker(){
    let userBudget = {
        userName : '',
        income : 0,
        expenses : [],
        totalExpenses: 0,
        numberOfExpenses: 0,
        tax: 0,
        netIcome: 0,
        balance: 0,
        savings: 0,
        finalStatus: 0,
    };

    userBudget.userName = getUserInput('Enter your name: ');
    userBudget.income = getUserInput('Enter your  total income: ', true);
    userBudget.numberOfExpenses = getUserInput('How many expanses do you have?', true);
   

    //validate inputes to ensre they are numbers
    if(
    isNaN(userBudget.income) || isNaN(userBudget.numberOfExpenses) || userBudget.income <= 0 || userBudget.numberOfExpenses < 0){
    console.log('Invalid input. Please enter valid numbers.');
    return;
    }else{
        

        
        calculateBudget(userBudget);
        displayResults(userBudget);  
    }
}
runBudgetTracker();

 