const getSumBtn = document.getElementById("getSumBtn");

const getSum = () => {
  const prices = document.querySelectorAll(".prices"); // select all prices
  let total = 0;

  prices.forEach(price => {
    total += parseFloat(price.textContent); // add each price
  });

  // Remove old total row if exists
  const oldRow = document.querySelector(".total-row");
  if (oldRow) oldRow.remove();

  // Create new total row
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: ₹${total}`;

  totalRow.appendChild(totalCell);

  document.querySelector("table").appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
