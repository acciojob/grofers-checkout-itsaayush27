const getSumBtn = document.getElementById("getSumBtn");

const getSum = () => {
  const prices = document.querySelectorAll(".price"); // <-- match Cypress test
  let total = 0;

  prices.forEach(price => {
    total += parseFloat(price.textContent) || 0;
  });

  // Remove old total row if exists
  const oldRow = document.querySelector(".total-row");
  if (oldRow) oldRow.remove();

  // Create new total row
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.id = "ans"; // Cypress expects #ans
  totalCell.colSpan = 2;
  totalCell.textContent = total;

  totalRow.appendChild(totalCell);
  document.querySelector("table").appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
