const addBtn = document.getElementById("addBtn");
const getSumBtn = document.getElementById("getSumBtn");
const table = document.getElementById("shopTable");

// Add new item row
addBtn.addEventListener("click", () => {
  const item = document.getElementById("itemInput").value.trim();
  const price = document.getElementById("priceInput").value.trim();

  if (item && price) {
    const row = document.createElement("tr");

    const itemCell = document.createElement("td");
    itemCell.textContent = item;
    itemCell.classList.add("item");

    const priceCell = document.createElement("td");
    priceCell.textContent = price;
    priceCell.classList.add("price");

    row.appendChild(itemCell);
    row.appendChild(priceCell);
    table.appendChild(row);

    // clear inputs
    document.getElementById("itemInput").value = "";
    document.getElementById("priceInput").value = "";
  } else {
    alert("Please enter both item and price.");
  }
});

// Calculate total
getSumBtn.addEventListener("click", () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;
  prices.forEach(price => total += parseFloat(price.textContent));

  // Remove old total row if exists
  const oldRow = document.querySelector(".total-row");
  if (oldRow) oldRow.remove();

  // Create total row
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total: ₹${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
});
