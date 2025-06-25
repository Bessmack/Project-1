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

function renderItem(product){
    const name = product.name;
    const description = product.description;
    const currency = product.currency;
    const price = product.price;
    const image = product.image_link;

    let searchSection = document.getElementById('fourthSection');
    let div = document.createElement('div');
    div.innerHTML = `
        <button class="imgContainer2" style="background-image: url('${image}'); background-size: cover;"></button>
        <h3>${name}</h3>
        <p>${description || "No description available."}</p>
        <p>${currency || "No Currency"}: ${price || "FREE"}</p>
        <button class="add2">ADD</button>`;

    searchSection.appendChild(div);
};



document.getElementById('form2').addEventListener('submit', (e)=>{
    e.preventDefault();
    let itemName = document.getElementById('productName').value;

    console.log(itemName);
});
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


