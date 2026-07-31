async function getProducts()
{
  const respons = await fetch("https://dummyjson.com/products")

  const products = await respons.json();

  console.log(products);
}
getProducts();