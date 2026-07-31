async function getProducts() {
  const respons = await fetch("https://dummyjson.com/products");

  const products = await respons.json();

  console.log(products.products[0]);
  console.log(products.products[0].title);
  console.log(products.products[0].price);
  console.log(products.products[0].thumbnail);
  console.log(products);

  const productsContainer = document.querySelector("#products");

  products.products.forEach(function (product) {

    productsContainer.innerHTML += `
      <div>
        <img src="${product.thumbnail}" width="200">

        <h2>${product.title}</h2>

        <p>Category: ${product.category}</p>

        <p>Brand: ${product.brand}</p>

        <p>⭐ ${product.rating}</p>

        <p>Price: $${product.price}</p>

        <p>Discount: ${product.discountPercentage}% OFF</p>

        <p>Stock: ${product.stock}</p>
      </div>
    `;

  });
}

getProducts();