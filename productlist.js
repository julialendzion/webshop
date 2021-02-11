const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}
/*<article class="smallProduct">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
            alt="Sahara Team India Fanwear Round Neck Jersey"
          />
          <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
          <p class="subtle">Tshirts | Nike</p>
          <p class="price">DKK 1595,-</p>
          <a href="product.html">See more</a>
        </article>
 */
function showProduct(product) {
  console.log(product);
  //grab the templete
  const template = document.querySelector("#smallProductTemplete").content;

  //clone it
  const copy = template.cloneNode(true);

  //change content
  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;

  copy.querySelector("h3").textContent = product.productdisplayname;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(
      ".discounted .price"
    ).textContent = `DKK ${product.price} ,- `;
    copy.querySelector(
      ".discounted .newprice"
    ).textContent = `DKK ${product.price} ,- `;
  }
  copy.querySelector(
    "article img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("article img").alt = product.productdisplayname;

  //grab parent
  const parent = document.querySelector("main");
  //append
  parent.appendChild(copy);
}
