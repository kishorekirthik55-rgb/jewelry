```javascript
const params =
new URLSearchParams(window.location.search);

const productId =
parseInt(params.get("id"));

const products =
JSON.parse(localStorage.getItem("products")) || [];

const product =
products.find(p => p.id === productId);

if(product){

    document.getElementById("productName")
    .textContent = product.name;

    document.getElementById("productDescription")
    .textContent = product.description;

    document.getElementById("productPrice")
    .textContent = "₹" + product.price;

    const mainImage =
    document.getElementById("mainImage");

    mainImage.src =
    product.images[0];

    const thumbContainer =
    document.getElementById("thumbnailContainer");

    product.images.forEach(image => {

        const thumb =
        document.createElement("img");

        thumb.src = image;

        thumb.className =
        "thumbnail";

        thumb.onclick = () => {

            mainImage.src = image;

        };

        thumbContainer.appendChild(thumb);

    });

    const sellerNumber =
    product.whatsapp ||
    "919999999999";

    const message = encodeURIComponent(
`Hello,

I want to order this product.

Product Name: ${product.name}

Price: ₹${product.price}

Product URL:
${window.location.href}`
    );

    document.getElementById("buyWhatsapp")
    .href =
    `https://wa.me/${sellerNumber}?text=${message}`;

}else{

    document.body.innerHTML =
    "<h1 style='text-align:center;margin-top:100px;'>Product Not Found</h1>";

}
```
