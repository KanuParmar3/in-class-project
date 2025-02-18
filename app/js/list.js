import "../scss/list.scss"; // Import SCSS styles

document.addEventListener("DOMContentLoaded", function () {
	const productTableBody = document.getElementById("productTableBody");

	// Sample data; in a real app, you might fetch or retrieve this from localStorage
	const products = JSON.parse(localStorage.getItem("products")) || [
		{
			title: "Product 1",
			description: "Description of Product 1",
			price: 10.99,
			stock: 15,
		},
		{
			title: "Product 2",
			description: "Description of Product 2",
			price: 20.49,
			stock: 30,
		},
		{
			title: "Product 3",
			description: "Description of Product 3",
			price: 15.99,
			stock: 50,
		},
	];

	// Function to dynamically create table rows
	products.forEach((product) => {
		const row = document.createElement("tr");

		// Title column
		const titleCell = document.createElement("td");
		titleCell.textContent = product.title;
		row.appendChild(titleCell);

		// Description column
		const descriptionCell = document.createElement("td");
		descriptionCell.textContent = product.description;
		row.appendChild(descriptionCell);

		// Price column
		const priceCell = document.createElement("td");
		priceCell.textContent = `$${product.price.toFixed(2)}`;
		row.appendChild(priceCell);

		// Stock column
		const stockCell = document.createElement("td");
		stockCell.textContent = product.stock;
		row.appendChild(stockCell);

		// Optionally, add an "Action" button or column for future actions (e.g., Delete or Edit)
		const actionCell = document.createElement("td");
		const editButton = document.createElement("button");
		editButton.textContent = "Edit";
		editButton.classList.add("btn", "btn-warning");
		actionCell.appendChild(editButton);
		row.appendChild(actionCell);

		// Append the row to the table body
		productTableBody.appendChild(row);
	});
});
