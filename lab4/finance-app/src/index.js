import { transactions } from './transactions.js';
import { renderTransaction, removeTransactionFromUI, updateTotal, showFullDescription } from './ui.js';
import { generateId, formatDate, calculateTotal } from './utils.js';

const form = document.getElementById('transaction-form');
form.addEventListener('submit', e => {
  e.preventDefault();

  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;
  const description = document.getElementById('description').value;

  if (!description || isNaN(amount)) return;

  const transaction = {
    id: generateId(),
    date: formatDate(new Date()),
    amount,
    category,
    description
  };

  transactions.push(transaction);
  renderTransaction(transaction);
  updateTotal(calculateTotal(transactions));

  form.reset();
});

// Удаление и просмотр полной информации
document.getElementById('transactions-table').addEventListener('click', e => {
  const row = e.target.closest('tr');
  if (!row) return;

  const id = row.dataset.id;

  if (e.target.classList.contains('delete-btn')) {
    const index = transactions.findIndex(t => t.id === id);
    if (index !== -1) {
      transactions.splice(index, 1);
      removeTransactionFromUI(id);
      updateTotal(calculateTotal(transactions));
    }
  } else {
    const transaction = transactions.find(t => t.id === id);
    if (transaction) showFullDescription(transaction.description);
  }
});
