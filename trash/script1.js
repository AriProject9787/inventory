let inventory = [];

function addOrUpdateResource() {
  const productName = document.getElementById('productName').value.trim().toLowerCase();
  const quantity = parseInt(document.getElementById('noitems').value);
  const useType = document.getElementById('useSelect').value;

  if (!productName || isNaN(quantity) || !useType) {
    alert("Please fill in all fields correctly.");
    return;
  }

  // Find existing product
  let existing = inventory.find(item => item.productName === productName);

  if (!existing) {
    existing = {
      productName,
      production: 0,
      sales: 0,
      branch1: 0,
      branch2: 0,
      balance: 0
    };
    inventory.push(existing);
  }

  // Check stock before sales or branch transfer
  const totalOut = existing.sales + existing.branch1 + existing.branch2;
  const totalAvailable = existing.production - totalOut;

  if (useType !== "Production" && quantity > totalAvailable) {
    alert(`Insufficient stock. Available: ${totalAvailable}`);
    return;
  }

  // Update quantities
  switch (useType) {
    case "Production":
      existing.production += quantity;
      break;
    case "Sales":
      existing.sales += quantity;
      break;
    case "branch1":
      existing.branch1 += quantity;
      break;
    case "branch2":
      existing.branch2 += quantity;
      break;
  }

  // Recalculate balance
  existing.balance = existing.production - (existing.sales + existing.branch1 + existing.branch2);

  // Reset form
  document.getElementById('productName').value = '';
  document.getElementById('noitems').value = '';
  document.getElementById('useSelect').value = '';

  renderInventory();
}

function deleteItem(index) {
  if (confirm("Are you sure you want to delete this product entry?")) {
    inventory.splice(index, 1);
    renderInventory();
  }
}

function renderInventory() {
  const table = document.getElementById('inventoryTable');
  table.innerHTML = '';

  inventory.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${capitalize(item.productName)}</td>
      <td>${item.production}</td>
      <td>${item.sales}</td>
      <td>${item.balance}</td>
      <td>${item.branch1}</td>
      <td>${item.branch2}</td>
      <td><button onclick="deleteItem(${index})">Delete</button></td>
    `;
    table.appendChild(row);
  });
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
