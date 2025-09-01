const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	  // Select all price cells
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

  // Remove old total row if it exists (avoid duplicates)
  const oldTotalRow = document.querySelector(".total-row");
  if (oldTotalRow) {
    oldTotalRow.remove();
  }

  // Create new row
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2");
  totalCell.textContent = `Total: ₹${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);