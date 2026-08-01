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
      <div  class="product-card">
        <img src="${product.thumbnail}" width="200">

        <h2>${product.title}</h2>

        <p>Category: ${product.category}</p>

        <p>Brand: ${product.brand}</p>

        <p class="rating">⭐ ${product.rating}</p>

        <p class="price">Prise: $${product.price}</p>

        <p  class="discount">Discount: ${product.discountPercentage}% OFF</p>

        <p>Stock: ${product.stock}</p>
        
          <button>View Details</button>
      </div>
    `;

  });
}
getProducts();




const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input",function () {
  console.log(searchInput.value)
})





