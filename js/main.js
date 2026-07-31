async function getProducts() {

    const respons = await fetch("https://dummyjson.com/products");

    const products = await respons.json();

    console.log(products.products[0]);
    console.log(products.products[0].title);
    console.log(products.products[0].price);
    console.log(products.products[0].thumbnail);
    console.log(products);

  
  
    const productsContainer = document.querySelector("#products");

    products.products.forEach(function(product) {

        productsContainer.innerHTML += `
            <h2>${product.title}</h2>
        `;

    });
}

getProducts();