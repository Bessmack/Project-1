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
let form2 = document.getElementById('form2');


document.getElementById('sixthSection').addEventListener("click", e => {
    if(e.target.classList.contains("delete")){
        e.preventDefault();
        e.target.parentNode.remove();
    };
});


document.querySelectorAll('.delete').forEach(button => {
    button.addEventListener('click', (e)=>{
        e.preventDefault();
        console.log(1 +2 +3);
    });
});


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let searchValue = document.getElementById("inpSearch").value.toLowerCase();
    fetch(`${baseUrl}brand=${searchValue}`)
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            renderItem(product);
        })
    });
    form.reset();
});


form2.addEventListener('submit', (e)=>{
    e.preventDefault();
    addProduct();

    form2.reset();
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


function addProduct(){
    let itemName = document.getElementById('productName').value;
    let itemDescription = document.getElementById('productDescription').value;
    let itemImage = document.getElementById('productImage').value;
    let itemCategory = document.getElementById('productCategory').value;
    let itemPrice = document.getElementById('productPrice').value;

    let customSection = document.getElementById('sixthSection');
    let div = document.createElement('div');
    div.innerHTML = `
        <button class="imgContainer3" style="background-image: url('${itemImage}'); background-size: cover;">hello</button>
        <h3>${itemName}</h3>
        <p>KES : ${itemPrice}</p>
        <button class="delete">DELETE</button>`;

    customSection.appendChild(div);

    console.log(itemName);
    console.log(itemDescription);
    console.log(itemImage);
    console.log(itemCategory);
    console.log(itemPrice);
}


document.querySelectorAll('.add').forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();
        console.log(1 +2 +3);
    });
});

document.querySelectorAll('.add2').forEach(button => {
    button.addEventListener('click', (e)=>{
        e.preventDefault();
        console.log(1 +2 +3);
    });
});









// function postToDataBase(){
//     let itemName = document.getElementById('productName').value;
//     let itemDescription = document.getElementById('productDescription').value;
//     let itemImage = document.getElementById('productImage').value;
//     let itemCategory = document.getElementById('productCategory').value;
//     let itemPrice = document.getElementById('productPrice').value;

//     let makeUp = {
//         name:itemName,
//         description:itemDescription,
//         image_link:itemImage,
//         category:itemCategory,
//         price:itemPrice
//     }

//     fetch(baseUrl, {
//         method: 'POST',
//         headers:{
//             'Content-Type': 'json/application'
//         },
//         body: JSON.stringify(makeUp)
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
// }




// function renderProduct(product){
//     const brand = product.brand;
//     const name = product.name;
//     const categ = product.category;
//     const description = product.description;
//     const currency = product.currency;
//     const price = product.price;
//     const colors = product.colors;
//     const image = product.image_link;

//     console.log(brand);
//     console.log(name);
//     console.log(categ);
//     console.log(description);
//     console.log(currency);
//     console.log(price);
//     console.log(colors);
//     console.log(image);
// };


// fetch(baseUrl)
// .then(res => res.json())
// .then(data => {
//     data.forEach(product => renderProduct(product))
// })


// https://www.affirmations.dev/
// https://makeup-api.herokuapp.com/api/v1/products.json?
// ONE PRODUCT COMPANY = https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline


