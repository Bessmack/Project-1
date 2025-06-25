document.querySelectorAll("#ul2 li").forEach(li => {
  li.addEventListener('mousedown', function(){
    const id = li.textContent.toLowerCase();
    const section = document.querySelector(`#${id}Section`);
    section.scrollIntoView({behavior:"smooth"});
  });
});

document.querySelector("#about").addEventListener('mousedown', function(){
    const footer = document.getElementById("footerSection");
    footer.scrollIntoView({behavior:"smooth"});
    }
)
document.querySelector("#cat").addEventListener('mousedown', function(){
    const category = document.getElementById("navbar2");
    category.scrollIntoView({behavior:"smooth"});
    }
)
document.querySelector(".cat").addEventListener('mousedown', function(){
    const category = document.getElementById("navbar2");
    category.scrollIntoView({behavior:"smooth"});
    }
)
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
document.querySelector("#home").addEventListener("mousedown", ()=>{
    let homePage = document.getElementById("topNav");
    homePage.scrollIntoView({behavior:"smooth"});
})





// Beginning of My TRUE Code

const baseUrl = "https://makeup-api.herokuapp.com/api/v1/products.json?"
const form = document.getElementById('form1');



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let searchValue = document.getElementById("inpSearch").value.toLowerCase();
    fetch(`${baseUrl}brand=${searchValue}`)
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            renderProduct(product);
            renderItem(product);
        })
    });
    form.reset();
});



let form2 = document.getElementById('form2');
form2.addEventListener('submit', (e)=>{
    e.preventDefault();
    createProduct();

    form2.reset();
});

function createProduct(){
    let itemName = document.getElementById('productName').value;
    let itemDescription = document.getElementById('productDescription').value;
    let itemImage = document.getElementById('productImage').value;
    let itemCategory = document.getElementById('productCategory').value;

    console.log(itemName);
    console.log(itemDescription);
    console.log(itemImage);
    console.log(itemCategory);
}


function renderProduct(product){
    const brand = product.brand;
    const name = product.name;
    const categ = product.category;
    const description = product.description;
    const currency = product.currency;
    const price = product.price;
    const colors = product.colors;
    const image = product.image_link;

    console.log(brand);
    console.log(name);
    console.log(categ);
    console.log(description);
    console.log(currency);
    console.log(price);
    console.log(colors);
    console.log(image);
};






// fetch(baseUrl)
// .then(res => res.json())
// .then(data => {
//     data.forEach(product => renderProduct(product))
// })


// https://www.affirmations.dev/
// https://makeup-api.herokuapp.com/api/v1/products.json?
// ONE PRODUCT COMPANY = https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline


