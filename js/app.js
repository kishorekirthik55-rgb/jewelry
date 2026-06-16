```javascript
// DARK MODE

const darkBtn = document.getElementById("darkModeBtn");

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
}

darkBtn?.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }

});


// SAMPLE PRODUCTS

if(!localStorage.getItem("products")){

    const sampleProducts = [

        {
            id:1,
            name:"Smart Watch",
            price:1999,
            description:"Premium smartwatch",
            images:[
                "assets/images/sample1.jpg"
            ]
        },

        {
            id:2,
            name:"Wireless Headset",
            price:1499,
            description:"Bluetooth headset",
            images:[
                "assets/images/sample2.jpg"
            ]
        },

        {
            id:3,
            name:"Gaming Mouse",
            price:899,
            description:"RGB Gaming Mouse",
            images:[
                "assets/images/sample3.jpg"
            ]
        }

    ];

    localStorage.setItem(
        "products",
        JSON.stringify(sampleProducts)
    );
}


// LOAD SLIDER

const slider = document.getElementById("productSlider");

if(slider){

    const products =
    JSON.parse(localStorage.getItem("products")) || [];

    products.forEach(product=>{

        slider.innerHTML += `

        <div class="product-card">

            <img
             src="${product.images[0]}"
             alt="${product.name}"
             loading="lazy">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <a
             class="btn"
             href="product-detail.html?id=${product.id}">
             View
            </a>

        </div>

        `;

    });

}


// SLIDER BUTTONS

const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

leftBtn?.addEventListener("click",()=>{

    slider.scrollLeft -= 300;

});

rightBtn?.addEventListener("click",()=>{

    slider.scrollLeft += 300;

});
```
