AOS.init()

let products = [

    { id: 1, name: "ROLEX", price: 999.99, category: "MANS FASHION", description: "A high-performance laptop for all your computing needs.", rating: 4.7, img: "imges/product 1.jpg" },
    { id: 2, name: "MICHAEL KORS", price: 699.99, category: "MANS FASHION", description: "A sleek and powerful smartphone with the latest features.", rating: 4.6, img: "imges/product 2.jpg" },
    { id: 3, name: "BESTWIN", price: 149.99, category: "MANS FASHION", description: "Premium noise-canceling headphones for an immersive audio experience.", rating: 4.5, img: "imges/product 3.jpg" },
    { id: 4, name: "TUBULAR", price: 499.99, category: "MANS FASHION", description: "A versatile tablet for work and entertainment on the go.", rating: 4.4, img: "imges/product 4.jpg" },
    { id: 5, name: "ROLEX", price: 199.99, category: "MANS FASHION", description: "A smartwatch that tracks your fitness and keeps you connected.", rating: 4.3, img: "imges/product 5.jpg" },
    { id: 6, name: "ROLEX", price: 799.99, category: "MANS FASHION", description: "A high-definition TV for a stunning viewing experience.", rating: 4.6, img: "imges/product 6.jpg" },
    { id: 7, name: "ROLEX", price: 599.99, category: "MANS FASHION", description: "A professional-grade camera for capturing stunning photos and videos.", rating: 4.7, img: "imges/product 8.jpg" },
    { id: 8, name: "RPLEX", price: 129.99, category: "MANS FASHION", description: "A reliable printer for all your home or office needs.", rating: 4.2, img: "imges/product 7.jpg" },
    { id: 9, name: "CK", price: 199.99, category: "MANS FASHION", description: "A high-resolution monitor for enhanced productivity and gaming.", rating: 4.5, img: "imges/product 12.jpg" },
    { id: 10, name: "FITROSS", price: 49.99, category: "MANS FASHION", description: "A comfortable and responsive keyboard for typing and gaming.", rating: 4.4, img: "imges/product 13.jpg" },
    { id: 11, name: "PENSHOPPE", price: 29.99, category: "MANS FASHION", description: "An ergonomic mouse for precise control and comfort.", rating: 4.3, img: "imges/product 14.jpg" },
    { id: 12, name: "ROLEX", price: 89.99, category: "MANS FASHION", description: "A high-speed router for seamless internet connectivity.", rating: 4.2, img: "imges/product 15.jpg" },
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", description: "A high-performance laptop for all your computing needs.", rating: 4.7, img: "imgs/LAPTOP.jpeg" },
    { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", description: "A sleek and powerful smartphone with the latest features.", rating: 4.6, img: "imgs/images.jpeg" },
    { id: 3, name: "Headphones", price: 149.99, category: "Electronics", description: "Premium noise-canceling headphones for an immersive audio experience.", rating: 4.5, img: "imgs/headphones.webp" },
    { id: 4, name: "Tablet", price: 499.99, category: "Electronics", description: "A versatile tablet for work and entertainment on the go.", rating: 4.4, img: "imgs/tablet.jpg" },
    { id: 5, name: "Smartwatch", price: 199.99, category: "Electronics", description: "A smartwatch that tracks your fitness and keeps you connected.", rating: 4.3, img: "imgs/smartwATCH.webp" },
    { id: 6, name: "TV", price: 799.99, category: "Electronics", description: "A high-definition TV for a stunning viewing experience.", rating: 4.6, img: "imges/product 6.jpg" },
    { id: 7, name: "Camera", price: 599.99, category: "Electronics", description: "A professional-grade camera for capturing stunning photos and videos.", rating: 4.7, img: "imgs/cat-2.jpg" },
    { id: 8, name: "Printer", price: 129.99, category: "Electronics", description: "A reliable printer for all your home or office needs.", rating: 4.2, img: "imgs/download.jpeg" },
    { id: 9, name: "Monitor", price: 199.99, category: "Electronics", description: "A high-resolution monitor for enhanced productivity and gaming.", rating: 4.5, img: "imgs/moniter.jpeg" },
    { id: 10, name: "Keyboard", price: 49.99, category: "Electronics", description: "A comfortable and responsive keyboard for typing and gaming.", rating: 4.4, img: "imgs/keyboared.jpeg" },
    { id: 11, name: "Mouse", price: 29.99, category: "Electronics", description: "An ergonomic mouse for precise control and comfort.", rating: 4.3, img: "imgs/mouse.jpeg" },
    { id: 12, name: "Router", price: 89.99, category: "Electronics", description: "A high-speed router for seamless internet connectivity.", rating: 4.2, img: "imgs/router.jpeg" },
    { id: 13, name: "External Hard Drive", price: 79.99, category: "Electronics", description: "A portable external hard drive for extra storage space.", rating: 4.5, img: "imgs/hard drive.jpeg" },
    { id: 14, name: "USB Flash Drive", price: 19.99, category: "Electronics", description: "A compact USB flash drive for easy data transfer.", rating: 4.1, img: "imgs/usb.jpeg" },
    { id: 15, name: "Gaming Console", price: 499.99, category: "Electronics", description: "A powerful gaming console for the ultimate gaming experience.", rating: 4.8, img: "imgs/gaming console.jpeg" },
    { id: 16, name: "Bluetooth Speaker", price: 59.99, category: "Electronics", description: "A portable Bluetooth speaker for high-quality sound on the go.", rating: 4.4, img: "imgs/speaker.jpeg" },
    { id: 17, name: "E-Reader", price: 129.99, category: "Electronics", description: "An e-reader for enjoying your favorite books in digital format.", rating: 4.3, img: "imgs/reader.jpeg" },
    { id: 18, name: "Fitness Tracker", price: 99.99, category: "Electronics", description: "A fitness tracker to monitor your health and activity levels.", rating: 4.5, img: "imgs/fitness.jpeg" },
    { id: 19, name: "Drone", price: 299.99, category: "Electronics", description: "A high-performance drone for aerial photography and fun.", rating: 4.6, img: "imgs/drone.jpeg" },
    { id: 20, name: "Projector", price: 399.99, category: "Electronics", description: "A high-quality projector for home theater and presentations.", rating: 4.4, img: "imgs/projector.jpeg" },
    { id: 21, name: "T-Shirt", price: 19.99, category: "Clothing", description: "A comfortable and stylish t-shirt for everyday wear.", rating: 4.2, img: "imgs/shirt.jpeg" },
    { id: 22, name: "Jeans", price: 49.99, category: "Clothing", description: "Classic jeans for a timeless and casual look.", rating: 4.3, img: "imgs/jeans.jpeg" },
    { id: 23, name: "Sneakers", price: 79.99, category: "Clothing", description: "Comfortable sneakers for sports and casual outings.", rating: 4.5, img: "imgs/shoes.jpeg" },
    { id: 24, name: "Jacket", price: 99.99, category: "Clothing", description: "A warm and stylish jacket for cold weather.", rating: 4.4, img: "imgs/jacket.jpeg" },
    { id: 25, name: "Dress", price: 59.99, category: "Clothing", description: "An elegant dress for special occasions.", rating: 4.6, img: "imgs/dress.jpeg" },
    { id: 26, name: "Sweater", price: 39.99, category: "Clothing", description: "A cozy sweater for chilly days.", rating: 4.3, img: "imgs/sweater.jpeg" },
    { id: 27, name: "Hat", price: 14.99, category: "Clothing", description: "A trendy hat to complete your outfit.", rating: 4.1, img: "imgs/hat.jpeg" },
    { id: 28, name: "Socks", price: 9.99, category: "Clothing", description: "Comfortable socks for everyday wear.", rating: 4.0, img: "imgs/socks.jpeg" },
    { id: 29, name: "Shorts", price: 29.99, category: "Clothing", description: "Casual shorts for a relaxed summer look.", rating: 4.2, img: "imgs/short.jpeg" },
    { id: 30, name: "Coat", price: 129.99, category: "Clothing", description: "A stylish coat to keep you warm in winter.", rating: 4.5, img: "imgs/coat.jpeg" },
    { id: 31, name: "Backpack", price: 49.99, category: "Accessories", description: "A durable backpack for school, work, or travel.", rating: 4.4, img: "imgs/backpack.jpeg" },
    { id: 32, name: "Wallet", price: 29.99, category: "Accessories", description: "A sleek wallet to keep your cards and cash organized.", rating: 4.3, img: "imgs/walletrt.jpeg" },
    { id: 33, name: "Sunglasses", price: 39.99, category: "Accessories", description: "Stylish sunglasses to protect your eyes from the sun.", rating: 4.5, img: "imgs/sunglases.jpeg" },
    { id: 34, name: "Watch", price: 199.99, category: "Accessories", description: "A sophisticated watch to complement your style.", rating: 4.6, img: "imgs/product-6.jpg" },
    { id: 35, name: "Belt", price: 19.99, category: "Accessories", description: "A classic belt to complete your outfit.", rating: 4.2, img: "imgs/belt.jpeg" },
    { id: 36, name: "Scarf", price: 24.99, category: "Accessories", description: "A soft scarf to keep you warm and stylish.", rating: 4.1, img: "imgs/scarf.jpeg" },
    { id: 37, name: "Gloves", price: 19.99, category: "Accessories", description: "Warm gloves for cold weather.", rating: 4.0, img: "imgs/gloves.jpeg" },
    { id: 38, name: "Umbrella", price: 14.99, category: "Accessories", description: "A sturdy umbrella to keep you dry on rainy days.", rating: 4.2, img: "imgs/umbreala.jpeg" },
    { id: 39, name: "Handbag", price: 89.99, category: "Accessories", description: "A chic handbag for everyday use or special occasions.", rating: 4.5, img: "imgs/handbagf.jpeg" },
    { id: 40, name: "Necklace", price: 59.99, category: "Accessories", description: "A beautiful necklace to add elegance to your look.", rating: 4.4, img: "imgs/necklace.webp" },
    { id: 41, name: "Coffee Maker", price: 79.99, category: "Appliances", description: "A coffee maker for brewing your favorite coffee at home.", rating: 4.5, img: "imgs/coffee.jpeg" },
    { id: 42, name: "Blender", price: 49.99, category: "Appliances", description: "A powerful blender for making smoothies and more.", rating: 4.3, img: "imgs/bleander.jpeg" },
    { id: 43, name: "Microwave", price: 99.99, category: "Appliances", description: "A convenient microwave for quick and easy cooking.", rating: 4.4, img: "imgs/wave.jpeg" },
    { id: 44, name: "Toaster", price: 29.99, category: "Appliances", description: "A reliable toaster for perfectly toasted bread.", rating: 4.2, img: "imgs/toast.jpeg" },
    { id: 45, name: "Vacuum Cleaner", price: 149.99, category: "Appliances", description: "A powerful vacuum cleaner for keeping your home spotless.", rating: 4.6, img: "imgs/vaccum.jpeg" },
    { id: 46, name: "Air Purifier", price: 199.99, category: "Appliances", description: "An air purifier to improve the air quality in your home.", rating: 4.5, img: "imgs/air.jpeg" },
    { id: 47, name: "Rice Cooker", price: 59.99, category: "Appliances", description: "A rice cooker for perfectly cooked rice every time.", rating: 4.4, img: "imgs/cooker.jpeg" },
    { id: 48, name: "Electric Kettle", price: 39.99, category: "Appliances", description: "An electric kettle for quickly boiling water.", rating: 4.3, img: "imgs/kettle.jpeg" },
 ];

const notyf = new Notyf({
    duration: 3000,
    position: {
        x: 'center',
        y: 'top',
    }
});

let divSingle = document.querySelector("#singlemain")
let check = localStorage.getItem("cart")
let arra = JSON.parse(check) || []
console.log(arra);

let ary = []
let get = localStorage.getItem("single-product");
let getItem = JSON.parse(get)
console.log(getItem);
ary.push(getItem)
console.log(ary);

ary.map((product) => {
    divSingle.innerHTML = `
<div class="row g-4 mt-5">
    <div class="col-md-6 mt-5"  data-aos="fade-right" data-aos-duration="1000">
        <img src="${product.img}" alt="${product.name}" class="product-image shadow-sm">
    </div>
    <div class="col" style="margin-top: 100px;"  data-aos="fade-left" data-aos-duration="1000">
        <h1 class="fw-bold">${product.name}</h1>
        <p class="text-muted small">Category: <span class="text-warning">${product.category}</span></p>
        <span class="text-warning">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
        <p class="price">$${product.price}</p>
        <p class="product-details">${product.description}</p>
        <button id="cartIn" data-index="${product.id}" class="btn btn-warning btn-lg w-100">Add to Cart</button>
    </div>
</div>
`;
    let cartIn = document.querySelector("#cartIn")
    cartIn.addEventListener("click", (e) => {
        e.preventDefault()
        let isProduct = arra.some((item) => item.name === product.name)
        console.log(isProduct);
        if (isProduct) {
            notyf.error("Already in a cart");
        } else {
            arra.push(getItem)
            localStorage.setItem("cart", JSON.stringify(arra))
            notyf.success('🛒 Product added to cart successfully!');

        }

    })
})

let searchBtn = document.querySelector("#searchBtn")
let input = document.querySelector("input")

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let product = products.filter((f) => {
        return f.name.toLowerCase().includes(input.value.toLowerCase());
    });

    if (input.value == "") {
        notyf.error("You did'nt search a product")
        return
    }

    if (product.length > 0) {
        console.log(product[0]);
        input.value = "";
        localStorage.setItem("single-product", JSON.stringify(product[0]));
        window.location = "singleproduct.html";
    } else {

        notyf.error("Product not available");
        input.value = "";
    }
});