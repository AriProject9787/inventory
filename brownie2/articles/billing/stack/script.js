let inventory = [];

function addOrUpdateResource() {
  const name = document.getElementById("resourceName").value.trim();
  const qty = parseFloat(document.getElementById("resourceQty").value);
  const unit = document.getElementById("resourceUnit").value.trim();

  if (!name || isNaN(qty) || qty <= 0 || !unit) {
    alert("Please enter valid resource details.");
    return;
  }

  const index = inventory.findIndex(item => item.name.toLowerCase() === name.toLowerCase());

  if (index !== -1) {
    inventory[index].qty += qty; // Add to existing
  } else {
    inventory.push({ name, qty, unit });
  }

  clearInputs();
  renderInventory();
}

function useResource(index) {
  const used = prompt("Enter quantity to use:");

  if (used === null) return; // Cancelled
  const usedQty = parseFloat(used);

  if (isNaN(usedQty) || usedQty <= 0) {
    alert("Enter a valid quantity.");
    return;
  }

  if (usedQty > inventory[index].qty) {
    alert("Not enough stock.");
    return;
  }

  inventory[index].qty -= usedQty;

  if (inventory[index].qty === 0) {
    inventory.splice(index, 1); // Remove if depleted
  }

  renderInventory();
}

function deleteResource(index) {
  if (confirm("Are you sure you want to delete this resource?")) {
    inventory.splice(index, 1);
    renderInventory();
  }
}

function renderInventory() {
  const table = document.getElementById("inventoryTable");
  table.innerHTML = "";

  inventory.forEach((item, index) => {
    const row = `
      <tr>
        <td>${item.name}</td>
        <td>${item.qty.toFixed(2)}</td>
        <td>${item.unit}</td>
        <td><button class="use-btn" onclick="useResource(${index})">Use</button></td>
        <td><button class="delete-btn" onclick="deleteResource(${index})">Delete</button></td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

function clearInputs() {
  document.getElementById("resourceName").value = "";
  document.getElementById("resourceQty").value = "";
  document.getElementById("resourceUnit").value = "";
}
