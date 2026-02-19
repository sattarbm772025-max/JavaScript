// Select DOM elements
const productContainer = document.getElementById("product-container");
const errorMessage = document.getElementById("error-message");

// Fetch products from API
function fetchProducts() {
  fetch("https://fakestoreapi.com/products")
    .then(response => {
      if (!response.ok) {
        throw new Error("Unable to fetch product data.");
      }
      return response.json(); // Convert to JSON
    })
    .then(products => {
      displayProducts(products);
    })
    .catch(error => {
      showError(error.message);
    });
}

// Function to display products dynamically
function displayProducts(products) {
  productContainer.innerHTML = ""; // Clear previous content

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;

    const title = document.createElement("h3");
    title.textContent = product.title;

    card.appendChild(image);
    card.appendChild(title);

    productContainer.appendChild(card);
  });
}

// Function to show error message
function showError(message) {
  errorMessage.textContent = "Error: " + message;
}

// Call function on page load
fetchProducts();
