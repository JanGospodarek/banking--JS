export function renderHistoryEntry(data) {
  let markup = "";
  data.forEach((entry) => {
    markup += `
            <li class="entry ${entry.type}">
               <p><span class="category">Title</span> ${entry.title}</p>
              <p><span class="category">Amount</span> ${entry.amount}</p>
              <p><span class="category">From</span> ${entry.from}</p>
              <p><span class="category">Wallet</span> ${entry.wallet}</p>
              <p><span class="category">Balance</span> ${entry.totalBalance}</p>
              <p><span class="category">Date</span> ${entry.date}</p>
            </li>
            `;
  });
  return markup;
}
