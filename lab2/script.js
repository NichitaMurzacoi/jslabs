const transactions = [
    {
      transaction_id: "T001",
      transaction_date: "2025-02-01",
      transaction_amount: 100.5,
      transaction_type: "credit",
      transaction_description: "Пополнение счета",
      merchant_name: "Bank",
      card_type: "debit",
    },
    {
      transaction_id: "T002",
      transaction_date: "2025-02-02",
      transaction_amount: -50.75,
      transaction_type: "debit",
      transaction_description: "Оплата в магазине",
      merchant_name: "Supermarket",
      card_type: "credit",
    },
    {
      transaction_id: "T003",
      transaction_date: "2025-02-03",
      transaction_amount: -30,
      transaction_type: "debit",
      transaction_description: "Кафе",
      merchant_name: "Coffee Shop",
      card_type: "debit",
    },
    {
      transaction_id: "T004",
      transaction_date: "2025-02-04",
      transaction_amount: 200,
      transaction_type: "credit",
      transaction_description: "Перевод от друга",
      merchant_name: "Friend",
      card_type: "credit",
    },
  ];
  
  function getUniqueTransactionTypes(transactions) {
    return [...new Set(transactions.map((t) => t.transaction_type))];
  }
  
  function calculateTotalAmount(transactions) {
    return transactions.reduce((sum, t) => sum + t.transaction_amount, 0);
  }
  
  function calculateTotalDebitAmount(transactions) {
    return transactions
      .filter((t) => t.transaction_type === "debit")
      .reduce((sum, t) => sum + t.transaction_amount, 0);
  }
  
  function getTransactionByType(transactions, type) {
    return transactions.filter((t) => t.transaction_type === type);
  }
  
  function getTransactionsInDateRange(transactions, startDate, endDate) {
    return transactions.filter(
      (t) => t.transaction_date >= startDate && t.transaction_date <= endDate
    );
  }
  
  function getTransactionsByMerchant(transactions, merchantName) {
    return transactions.filter((t) => t.merchant_name === merchantName);
  }
  
  function calculateAverageTransactionAmount(transactions) {
    if (transactions.length === 0) return 0;
    return calculateTotalAmount(transactions) / transactions.length;
  }
  
  function getTransactionsByAmountRange(transactions, minAmount, maxAmount) {
    return transactions.filter(
      (t) => t.transaction_amount >= minAmount && t.transaction_amount <= maxAmount
    );
  }
  
  function findMostTransactionsMonth(transactions) {
    const monthCount = {};
    transactions.forEach((t) => {
      const month = t.transaction_date.slice(0, 7);
      monthCount[month] = (monthCount[month] || 0) + 1;
    });
    return Object.keys(monthCount).reduce((a, b) => (monthCount[a] > monthCount[b] ? a : b));
  }
  
  function findMostDebitTransactionMonth(transactions) {
    const monthCount = {};
    transactions
      .filter((t) => t.transaction_type === "debit")
      .forEach((t) => {
        const month = t.transaction_date.slice(0, 7);
        monthCount[month] = (monthCount[month] || 0) + 1;
      });
    return Object.keys(monthCount).reduce((a, b) => (monthCount[a] > monthCount[b] ? a : b));
  }
  
  function mostTransactionTypes(transactions) {
    const debitCount = transactions.filter((t) => t.transaction_type === "debit").length;
    const creditCount = transactions.length - debitCount;
    return debitCount > creditCount ? "debit" : creditCount > debitCount ? "credit" : "equal";
  }
  
  function getTransactionsBeforeDate(transactions, date) {
    return transactions.filter((t) => t.transaction_date < date);
  }
  
  function findTransactionById(transactions, id) {
    return transactions.find((t) => t.transaction_id === id) || null;
  }
  
  function mapTransactionDescriptions(transactions) {
    return transactions.map((t) => t.transaction_description);
  }
  
  console.log("Уникальные типы транзакций:", getUniqueTransactionTypes(transactions));
  console.log("Общая сумма транзакций:", calculateTotalAmount(transactions));
  console.log("Общая сумма дебетовых транзакций:", calculateTotalDebitAmount(transactions));
  console.log("Транзакции по типу 'debit':", getTransactionByType(transactions, "debit"));
  console.log("Транзакции в диапазоне дат:", getTransactionsInDateRange(transactions, "2025-02-01", "2025-02-03"));
  console.log("Средняя сумма транзакций:", calculateAverageTransactionAmount(transactions));
  console.log("Транзакции по магазину 'Supermarket':", getTransactionsByMerchant(transactions, "Supermarket"));
  console.log("Транзакции по диапазону суммы:", getTransactionsByAmountRange(transactions, -50, 100));
  console.log("Месяц с наибольшим числом транзакций:", findMostTransactionsMonth(transactions));
  console.log("Месяц с наибольшим числом дебетовых транзакций:", findMostDebitTransactionMonth(transactions));
  console.log("Какой тип транзакций больше:", mostTransactionTypes(transactions));
  console.log("Транзакции до 2025-02-03:", getTransactionsBeforeDate(transactions, "2025-02-03"));
  console.log("Поиск транзакции по ID 'T002':", findTransactionById(transactions, "T002"));
  console.log("Описание транзакций:", mapTransactionDescriptions(transactions));
  