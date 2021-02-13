const url = "https://kea-alt-del.dk/t7/api/products/2801";
// fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));
//populate the page

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .category").textContent =
    product.category;
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;
  document.querySelector(
    ".img .productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector(".img .productimage").alt = product.productdisplayname;
  document.querySelector(".about h3").textContent = product.productdisplayname;
  document.querySelector(
    ".about p"
  ).textContent = `${product.articletype} | ${product.brandname}`;
  document.querySelector(
    ".about .price"
  ).textContent = `price: ${product.price} DKK`;

  document.querySelector(".info .modelname").textContent =
    product.productdisplayname;
  document.querySelector(".info .color").textContent = product.color;
  document.querySelector(".info .brand").textContent = product.brandname;
  document.querySelector(".info p").textContent = product.brandbio;
}

//
