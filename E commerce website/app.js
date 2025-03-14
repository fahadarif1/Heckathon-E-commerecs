AOS.init()   
 const products = [
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
  { id: 11, name: "ROLEX", price: 999.99, category: "MANS FASHION", description: "A high-performance laptop for all your computing needs.", rating: 4.7, img: "imges/product 1.jpg" },
  { id: 12, name: "MICHAEL KORS", price: 699.99, category: "MANS FASHION", description: "A sleek and powerful smartphone with the latest features.", rating: 4.6, img: "imges/product 2.jpg" },
  { id: 13, name: "BESTWIN", price: 149.99, category: "MANS FASHION", description: "Premium noise-canceling headphones for an immersive audio experience.", rating: 4.5, img: "imges/product 3.jpg" },
  { id: 14, name: "TUBULAR", price: 499.99, category: "MANS FASHION", description: "A versatile tablet for work and entertainment on the go.", rating: 4.4, img: "imges/product 4.jpg" },
  { id: 15, name: "ROLEX", price: 199.99, category: "MANS FASHION", description: "A smartwatch that tracks your fitness and keeps you connected.", rating: 4.3, img: "imges/product 5.jpg" },
  { id: 16, name: "ROLEX", price: 799.99, category: "MANS FASHION", description: "A high-definition TV for a stunning viewing experience.", rating: 4.6, img: "imges/product 6.jpg" },
  { id: 17, name: "ROLEX", price: 599.99, category: "MANS FASHION", description: "A professional-grade camera for capturing stunning photos and videos.", rating: 4.7, img: "imges/product 8.jpg" },
  { id: 18, name: "RPLEX", price: 129.99, category: "MANS FASHION", description: "A reliable printer for all your home or office needs.", rating: 4.2, img: "imges/product 7.jpg" },
  { id: 19, name: "CK", price: 199.99, category: "MANS FASHION", description: "A high-resolution monitor for enhanced productivity and gaming.", rating: 4.5, img: "imges/product 12.jpg" },
  { id: 20, name: "FITROSS", price: 49.99, category: "MANS FASHION", description: "A comfortable and responsive keyboard for typing and gaming.", rating: 4.4, img: "imges/product 13.jpg" },
  { id: 21, name: "PENSHOPPE", price: 29.99, category: "MANS FASHION", description: "An ergonomic mouse for precise control and comfort.", rating: 4.3, img: "imges/product 14.jpg" },
  { id: 22, name: "ROLEX", price: 89.99, category: "MANS FASHION", description: "A high-speed router for seamless internet connectivity.", rating: 4.2, img: "imges/product 15.jpg" },
  { id: 21, name: "ROLEX", price: 999.99, category: "MANS FASHION", description: "A high-performance laptop for all your computing needs.", rating: 4.7, img: "imges/product 1.jpg" },
  { id: 22, name: "MICHAEL KORS", price: 699.99, category: "MANS FASHION", description: "A sleek and powerful smartphone with the latest features.", rating: 4.6, img: "imges/product 2.jpg" },
  { id: 23, name: "BESTWIN", price: 149.99, category: "MANS FASHION", description: "Premium noise-canceling headphones for an immersive audio experience.", rating: 4.5, img: "imges/product 3.jpg" },
  { id: 24, name: "TUBULAR", price: 499.99, category: "MANS FASHION", description: "A versatile tablet for work and entertainment on the go.", rating: 4.4, img: "imges/product 4.jpg" },
  { id: 25, name: "ROLEX", price: 199.99, category: "MANS FASHION", description: "A smartwatch that tracks your fitness and keeps you connected.", rating: 4.3, img: "imges/product 5.jpg" },
  { id: 26, name: "ROLEX", price: 799.99, category: "MANS FASHION", description: "A high-definition TV for a stunning viewing experience.", rating: 4.6, img: "imges/product 6.jpg" },
  { id: 27, name: "ROLEX", price: 599.99, category: "MANS FASHION", description: "A professional-grade camera for capturing stunning photos and videos.", rating: 4.7, img: "imges/product 8.jpg" },
  { id: 28, name: "RPLEX", price: 129.99, category: "MANS FASHION", description: "A reliable printer for all your home or office needs.", rating: 4.2, img: "imges/product 7.jpg" },
  { id: 29, name: "CK", price: 199.99, category: "MANS FASHION", description: "A high-resolution monitor for enhanced productivity and gaming.", rating: 4.5, img: "imges/product 12.jpg" },
  { id: 30, name: "FITROSS", price: 49.99, category: "MANS FASHION", description: "A comfortable and responsive keyboard for typing and gaming.", rating: 4.4, img: "imges/product 13.jpg" },
  { id: 31, name: "PENSHOPPE", price: 29.99, category: "MANS FASHION", description: "An ergonomic mouse for precise control and comfort.", rating: 4.3, img: "imges/product 14.jpg" },
  { id: 32, name: "ROLEX", price: 89.99, category: "MANS FASHION", description: "A high-speed router for seamless internet connectivity.", rating: 4.2, img: "imges/product 15.jpg" },
  { id: 33, name: "ROLEX", price: 999.99, category: "MANS FASHION", description: "A high-performance laptop for all your computing needs.", rating: 4.7, img: "imges/product 1.jpg" },
  { id: 34, name: "MICHAEL KORS", price: 699.99, category: "MANS FASHION", description: "A sleek and powerful smartphone with the latest features.", rating: 4.6, img: "imges/product 2.jpg" },
  { id: 35, name: "BESTWIN", price: 149.99, category: "MANS FASHION", description: "Premium noise-canceling headphones for an immersive audio experience.", rating: 4.5, img: "imges/product 3.jpg" },
  { id: 36, name: "TUBULAR", price: 499.99, category: "MANS FASHION", description: "A versatile tablet for work and entertainment on the go.", rating: 4.4, img: "imges/product 4.jpg" },
  { id: 37, name: "ROLEX", price: 199.99, category: "MANS FASHION", description: "A smartwatch that tracks your fitness and keeps you connected.", rating: 4.3, img: "imges/product 5.jpg" },
  { id: 38, name: "ROLEX", price: 799.99, category: "MANS FASHION", description: "A high-definition TV for a stunning viewing experience.", rating: 4.6, img: "imges/product 6.jpg" },
  { id: 39, name: "ROLEX", price: 599.99, category: "MANS FASHION", description: "A professional-grade camera for capturing stunning photos and videos.", rating: 4.7, img: "imges/product 8.jpg" },
  { id: 40, name: "RPLEX", price: 129.99, category: "MANS FASHION", description: "A reliable printer for all your home or office needs.", rating: 4.2, img: "imges/product 7.jpg" },
  { id: 41, name: "CK", price: 199.99, category: "MANS FASHION", description: "A high-resolution monitor for enhanced productivity and gaming.", rating: 4.5, img: "imges/product 12.jpg" },
  { id: 42, name: "FITROSS", price: 49.99, category: "MANS FASHION", description: "A comfortable and responsive keyboard for typing and gaming.", rating: 4.4, img: "imges/product 13.jpg" },
  { id: 43, name: "PENSHOPPE", price: 29.99, category: "MANS FASHION", description: "An ergonomic mouse for precise control and comfort.", rating: 4.3, img: "imges/product 14.jpg" },
  { id: 44, name: "ROLEX", price: 89.99, category: "MANS FASHION", description: "A high-speed router for seamless internet connectivity.", rating: 4.2, img: "imges/product 15.jpg" },
 
];

const notyf = new Notyf({
  duration: 3000,
  position: {
    x: 'center',
    y: 'top',
  }
});

let featuredProducts = document.getElementById("products")
const shuffledProducts = shuffleArray(products);

function renderHome(arra) {
  featuredProducts.innerHTML = ""
  console.log(arra);
  for (let i = 0; i < 16; i++) {
    const item = arra[i];
    console.log(item);

    featuredProducts.innerHTML += `
  <div class="card m-2 shadow-sm border-0" data-aos="fade-up" data-aos-duration="1500" style="width: 16rem; border-radius: 12px; overflow: hidden; transition: transform 0.2s;">
    <img src="${item.img}" class="card-img-top" alt="${item.name}" style="height: 225px; object-fit: content; transition: transform 0.3s ease;">
    <div class="card-body p-3 d-flex flex-column">
      <h5 class="card-title text-truncate mb-1" style="font-size: 1.1rem;">${item.name}</h5>
      <p class="card-text text-muted small text-truncate mb-3">${item.description}</p>
      <div class="d-flex justify-content-between align-items-center mb-2">
        <span class="badge bg-warning text-dark border">${item.category}</span>
        <span class="text-warning small" style="font-size: 0.9rem;">
          ${'★'.repeat(Math.floor(item.rating))}${'☆'.repeat(5 - Math.floor(item.rating))}
          <span class="text-muted ms-1">(${item.rating})</span>
        </span>
      </div>
      <h5 class="text-black fw-bold mb-3 mt-2">$${item.price.toFixed(2)}</h5>
      <button class="btn btn-warning btn-sm w-100" id="moveToSingle" data-index="${item.id}" id = "btn-hover" style="transition: background-color 0.3s ease;">
        <i class="fas fa-bolt me-1"></i> Buy Now
      </button>
    </div>
  </div>
`;
  }
  let singleProduct = document.querySelectorAll("#moveToSingle")
  singleProduct.forEach((single) => {
    single.addEventListener("click", (e) => {
      e.preventDefault()
      let index = e.target.dataset.index
      console.log(index);
      products.map((item) => {
        if (index == item.id) {
          console.log(item);
          localStorage.setItem("single-product", JSON.stringify(item))
          window.location = "singleproduct.html"
        }
      })

    })
  })
}

renderHome(shuffledProducts)


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let categoriesLogic = document.querySelectorAll(".categoriesLogic")

categoriesLogic.forEach((btnCategory) => {
  btnCategory.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.id == 1) {
      product = products.filter((item) => {
        return item.category == "Appliances"
      })
      console.log(product);
      render(product)
    }

    if (e.target.id == 2) {
      product = products.filter((item) => {
        return item.category == "Accessories"
      })
      console.log(product);
      render(product)
    }

    if (e.target.id == 3) {
      product = products.filter((item) => {
        return item.category == "Electronics"
      })
      console.log(product);
      render(product)
    }

    if (e.target.id == 4) {
      product = products.filter((item) => {
        return item.category == "Clothing"
      })
      console.log(product);
      render(product)
    }
  })
})



function shop() {
  window.location = "product.html"
}


function render(arr) {
  featuredProducts.innerHTML = ""
  console.log(arr);
  arr.map((item) => {
    featuredProducts.innerHTML += `
  <div class="card m-2 shadow-sm border-0" data-aos="fade-up" data-aos-duration="1500" style="width: 16rem; border-radius: 12px; overflow: hidden; transition: transform 0.2s;">
    <img src="${item.img}" class="card-img-top" alt="${item.name}" style="height: 225px; object-fit: content; transition: transform 0.3s ease;">
    <div class="card-body p-3 d-flex flex-column">
      <h5 class="card-title text-truncate mb-1" style="font-size: 1.1rem;">${item.name}</h5>
      <p class="card-text text-muted small text-truncate mb-3">${item.description}</p>
      <div class="d-flex justify-content-between align-items-center mb-2">
        <span class="badge bg-warning text-dark border">${item.category}</span>
        <span class="text-warning small" style="font-size: 0.9rem;">
          ${'★'.repeat(Math.floor(item.rating))}${'☆'.repeat(5 - Math.floor(item.rating))}
          <span class="text-muted ms-1">(${item.rating})</span>
        </span>
      </div>
      <h5 class="text-black fw-bold mb-3 mt-2">$${item.price.toFixed(2)}</h5>
      <button class="btn btn-warning btn-sm w-100" id="moveToSingle" data-index="${item.id}" id = "btn-hover" style="transition: background-color 0.3s ease;">
        <i class="fas fa-bolt me-1"></i> Buy Now
      </button>
    </div>
  </div>
`;

    let singleProduct = document.querySelectorAll("#moveToSingle")
    singleProduct.forEach((single) => {
      single.addEventListener("click", (e) => {
        e.preventDefault()
        let index = e.target.dataset.index
        console.log(index);
        products.map((item) => {
          if (index == item.id) {
            console.log(item);
            localStorage.setItem("single-product", JSON.stringify(item))
            window.location = "singleproduct.html"
          }
        })

      })
    })
  })
}

let searchBtn = document.querySelector("#searchBtn")
let input = document.querySelector("input")

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value == "") {
    notyf.error("You did'nt search a product")
    return
  }

  let product = products.filter((f) => {
    return f.name.toLowerCase().includes(input.value.toLowerCase());
  });

  if (product.length > 0) {
    console.log(product[0]);
    input.value = "";
    localStorage.setItem("single-product", JSON.stringify(product[0]));
    window.location = "singleproduct.html";
  } else {
    notyf.error("Product not Available")
    input.value = "";
  }
});