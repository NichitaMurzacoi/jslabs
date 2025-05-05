export function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  
  export function formatDate(date) {
    return date.toLocaleString();
  }
  
  export function calculateTotal(transactions) {
    return transactions.reduce((sum, t) => sum + t.amount, 0);
  }
  