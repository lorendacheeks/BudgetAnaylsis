function BudgetAnalysis() {
    var budget = Number(prompt("Enter your budget amount for this month: "));
    if (isNaN(budget) || budget < 0) {
        alert("Please enter a valid budget amount.");
        return;
    }

    var expenseCount = Number(prompt("How many expenses did you have this month? "));
    if (isNaN(expenseCount) || expenseCount <= 0) {
        alert("Please enter a valid number of expenses.");
        return;
    }

    var expenseTotal = 0;

    for (var i = 1; i <= expenseCount; i++) {
        var expense = Number(prompt("How much is expense " + i + "?"));
        if (isNaN(expense) || expense < 0) {
            alert("Please enter a valid number for expense " + i);
            i--; // Repeat this expense input
            continue;
        }
        expenseTotal += expense;
    }

    var result = "";

    if (budget > expenseTotal) {
        var under = budget - expenseTotal;
        result = "Under budget by $" + under.toFixed(2);
    } else if (expenseTotal > budget) {
        var over = expenseTotal - budget;
        result = "Over budget by $" + over.toFixed(2);
    } else {
        result = "Right on budget!";
    }

    document.getElementById("results").innerHTML = result;
}

BudgetAnalysis();
