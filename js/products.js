```javascript
const grid = document.getElementById("productsGrid");

const products =
JSON.parse(localStorage.getItem("products")) || [];

if(products.length === 0){

    grid.innerHTML = `
    <h2>No Products Found</h2>
    `;

}else{

    products.forEach(product=>{

        grid.innerHTML += `

        <div class="product-card">

            <img
            src="${product.images[0]}"
            alt="${product.name}"
            loading="lazy">

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <p><b>₹${product.price}</b></p>

            <a
            href="product-detail.html?id=${product.id}"
            class="btn">
            View Product
            </a>

        </div>

        `;

    });

}
```
