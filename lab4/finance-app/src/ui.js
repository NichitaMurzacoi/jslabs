import { transactions } from './transactions.js';

export function renderTransaction(transaction) {
  const tbody = document.querySelector('#transactions-table tbody');
  const row = document.createElement('tr');
  row.dataset.id = transaction.id;
  row.className = transaction.amount > 0 ? 'green' : 'red';

  row.innerHTML = `
    <td>${transaction.date}</td>
    <td>${transaction.category}</td>
    <td>${transaction.description.split(' ').slice(0, 4).join(' ')}</td>
    <td><button class="delete-btn">Удалить</button></td>
  `;

  tbody.appendChild(row);
}

export function removeTransactionFromUI(id) {
  const row = document.querySelector(`tr[data-id="${id}"]`);
  if (row) row.remove();
}

export function updateTotal(sum) {
  document.getElementById('total').textContent = sum;
}

export function showFullDescription(desc) {
  document.getElementById('full-description').textContent = desc;
}
