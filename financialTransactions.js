//function to add objects to array
var transactions = [];
function addTransaction() {
  //get inputs
  var monthToAdd = document.getElementById("month").value;
  var inflowToAdd = parseInt(document.getElementById("inflow").value) || 0;
  var outflowToAdd = parseInt(document.getElementById("outflow").value) || 0;
  //create object using inputs
  var transactionToBeAdded = {
    month: monthToAdd,
    inflow: inflowToAdd,
    outflow: outflowToAdd,
  };
  //push it in transactions array
  transactions.push(transactionToBeAdded);

  // Update HTML with the new transaction
  displayTransactions();
}

//Total balance
function calculateTotalBalance() {
  var totalInflow = 0;
  var totalOutflow = 0;
  transactions.forEach((transaction) => {
    totalInflow += transaction.inflow;
    totalOutflow += transaction.outflow;
  });
  var totalBalance = totalInflow - totalOutflow;
  return totalBalance;
}

//Total balance month wise
function calculateMonthlyBalance() {
  var result = {};
  transactions.forEach((transaction) => {
    result[transaction.month] = transaction.inflow - transaction.outflow;
  });
  return result;
}
function displayTransactions() {
  // Display the array of objects and results in the result div
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML =
    "Transactions: " + JSON.stringify(transactions, null, 2) + "<br>";
  resultDiv.innerHTML += "Total Balance: " + calculateTotalBalance() + "<br>";
  resultDiv.innerHTML +=
    "Monthly Balances: " + JSON.stringify(calculateMonthlyBalance(), null, 2);
}
