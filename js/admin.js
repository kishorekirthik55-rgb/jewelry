```javascript
const DEFAULT_ADMIN = {
    username: "admin",
    password: "admin123"
};

if (!localStorage.getItem("admin")) {
    localStorage.setItem(
        "admin",
        JSON.stringify(DEFAULT_ADMIN)
    );
}

function login() {

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    const admin =
        JSON.parse(
            localStorage.getItem("admin")
        );

    if (
        username === admin.username &&
        password === admin.password
    ) {

        sessionStorage.setItem(
            "adminLoggedIn",
            "true"
        );

        showDashboard();

    } else {

        alert("Invalid Login");

    }

}

function showDashboard() {

    document
        .getElementById("loginSection")
        .classList.add("hidden");

    document
        .getElementById("adminSection")
        .classList.remove("hidden");

    loadProducts();

}

if (
    sessionStorage.getItem(
        "adminLoggedIn"
    ) === "true"
) {
    showDashboard();
}

function addProduct() {

    const products =
        JSON.parse(
            localStorage.getItem("products")
        ) || [];

    const product = {

        id: Date.now(),

        name:
            document.getElementById(
                "productName"
            ).value,

        description:
            document.getElementById(
                "productDescription"
            ).value,

        price:
            document.getElementById(
                "productPrice"
            ).value,

        category:
            document.getElementById(
                "productCategory"
            ).value,

        whatsapp:
            document.getElementById(
                "productWhatsapp"
            ).value,

        featured:
            document.getElementById(
                "featured"
            ).value === "true",

        images: [
            document.getElementById("img1")
                .value,
            document.getElementById("img2")
                .value,
            document.getElementById("img3")
                .value,
            document.getElementById("img4")
                .value,
            document.getElementById("img5")
                .value
        ].filter(Boolean)

    };

    products.push(product);

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

    alert("Product Saved");

    location.reload();

}

function loadProducts() {

    const products =
        JSON.parse(
            localStorage.getItem("products")
        ) || [];

    const table =
        document.getElementById(
            "productTable"
        );

    table.innerHTML = "";

    products.forEach(product => {

        table.innerHTML += `
        <tr>

            <td>${product.id}</td>

            <td>${product.name}</td>

            <td>₹${product.price}</td>

            <td>

                <button
                    class="danger"
                    onclick="deleteProduct(${product.id})">
                    Delete
                </button>

            </td>

        </tr>
        `;

    });

}

function deleteProduct(id) {

    if (
        !confirm(
            "Delete this product?"
        )
    ) {
        return;
    }

    let products =
        JSON.parse(
            localStorage.getItem("products")
        ) || [];

    products =
        products.filter(
            p => p.id !== id
        );

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

    loadProducts();

}

/* SECRET SHORTCUT */

document.addEventListener(
    "keydown",
    function(e){

        if(
            e.ctrlKey &&
            e.shiftKey &&
            e.key.toLowerCase() === "a"
        ){

            window.location.href =
            "admin.html";

        }

    }
);
```
