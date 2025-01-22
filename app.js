const products = [
  {
    productName: "Sandia",
    price: 15,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1699869750/e-commerce/ksmw5s3xg7eeakpva5xd.png",
    category: "comidas",
  },
  {
    productName: "Bananita",
    price: 30,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1699871193/e-commerce/mopgcvdiepr8axkazmcp.png",
    category: "comidas",
  },
  {
    productName: "CPU",
    price: 80,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1710612297/e-commerce/cpu_awimlt.png",
    category: "compus",
  },
  {
    productName: "Compu",
    price: 40,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1700045911/e-commerce/compu_unvcoi.png",
    category: "compus",
  },
  {
    productName: "Huevito",
    price: 50,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1710611492/e-commerce/huevo_uau0bz.png",
    category: "comidas",
  },
  {
    productName: "Mate",
    price: 60,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1710611821/e-commerce/ksmw5s3xg7eeakpva5xd_r9ood6.png",
    category: "bebidas",
  },
  {
    productName: "Cafecito",
    price: 70,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1710612106/e-commerce/cafesitoo_oewcna.png",
    category: "bebidas",
  },
  {
    productName: "Cervecita",
    price: 20,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1699869747/e-commerce/xhlekqrockwxzjskzppw.png",
    category: "bebidas",
  },
];

function displayProducts(productsToShow) {
  const shopContent = document.getElementById("shopContent");
  shopContent.innerHTML = "";

  //Creamos un objeto DIV dinamico
  productsToShow.forEach((product) => {
    const div = document.createElement("div");
    div.className = "card-products";
    div.innerHTML = `
        <img src="${product.img}" alt="Producto">
        <h3>${product.productName}</h3>
        <p class="price"> $ ${product.price}</p>
        <button>Agregar al carrito</button>
        `;

    //Añadir el elemento DIV al contenedor principal (shopContent) por cada iteración
    shopContent.append(div);
  });
}

function filterProducts(categoria) {
  const productsToShow = products.filter(
    (product) => product.category === categoria
  );
  displayProducts(productsToShow);
}

const comidasBtn = document.getElementById("comidasBtn");
const todosBtn = document.getElementById("todosBtn");
const bebidasBtn = document.getElementById("bebidasBtn");
const compusBtn = document.getElementById("compusBtn");

//Addeventlistener que escuche un click. Y que ejecute que lo que tire dentro de la arrow function
comidasBtn.addEventListener("click", () => {
  filterProducts("comidas");
});

bebidasBtn.addEventListener("click", () => {
  filterProducts("bebidas");
});

compusBtn.addEventListener("click", () => {
  filterProducts("compus");
});

todosBtn.addEventListener("click", () => {
  displayProducts(products);
});

displayProducts(products);
