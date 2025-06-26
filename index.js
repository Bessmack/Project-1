//For every clicked list on the second navbar, once clicked it goes to the product section
document.querySelectorAll("#ul2 li").forEach(li => {
  li.addEventListener('mousedown', function(){
    const id = li.textContent.toLowerCase();
    const section = document.querySelector(`#${id}Section`);
    section.scrollIntoView({behavior:"smooth"});
  });
});
//Once the ABOUT US button is clicked, it leads the user to the footer where the about is described
document.querySelector("#about").addEventListener('mousedown', function(){
    const footer = document.getElementById("footerSection");
    footer.scrollIntoView({behavior:"smooth"});
    }
)
//Once it is clicked, it takes the user to the second navbar area
document.querySelector("#cat").addEventListener('mousedown', function(){
    const category = document.getElementById("footerSection");
    category.scrollIntoView({behavior:"smooth"});
    }
)
//Once it is clicked, it takes the user to the second navbar area
document.querySelector(".cat").addEventListener('mousedown', function(){
    const category = document.getElementById("navbar2");
    category.scrollIntoView({behavior:"smooth"});
    }
)
//Once it is clicked, it takes the user to a dark-mode setting
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
//Once it is clicked, it takes the user to the top
document.querySelector("#home").addEventListener("mousedown", ()=>{
    let homePage = document.getElementById("topNav");
    homePage.scrollIntoView({behavior:"smooth"});
})



// Beginning of My TRUE Code

//Declare variables
const baseUrl = "https://makeup-api.herokuapp.com/api/v1/products.json?"
const form = document.getElementById('form1');
let form2 = document.getElementById('form2');


//Declare what happens when one presses the add button on elements in the 'secondSection'
document.getElementById('secondSection').addEventListener("click", function (e) {
    if(e.target.classList.contains("add")){
        e.preventDefault();

        const elementDiv = e.target.closest('div');
        let cloneDiv = elementDiv.cloneNode(true);
        let addButton = cloneDiv.querySelector('.add')
        if(addButton){
            addButton.textContent = "DELETE";
            addButton.classList.remove("add");
            addButton.classList.add("delete");
        }

        document.getElementById('sixthSection').appendChild(cloneDiv)
    }
})

//Declare what happens when one presses the add button on elements in the 'fourthSection'
document.getElementById('fourthSection').addEventListener("click", function (e) {
    if(e.target.classList.contains("add2")){
        e.preventDefault();

        const elementDiv = e.target.closest('div');
        let cloneDiv = elementDiv.cloneNode(true);
        let addButton = cloneDiv.querySelector('.add2')
        if(addButton){
            addButton.textContent = "DELETE";
            addButton.classList.remove("add2");
            addButton.classList.add("delete");
        }

        document.getElementById('sixthSection').appendChild(cloneDiv)
    }
})


//Targetting the 'sixthSection' and add the DELETE functionality if clicked
document.getElementById('sixthSection').addEventListener("click", e => {
    if(e.target.classList.contains("delete")){
        e.preventDefault();
        e.target.closest('div').remove();
    };
});


//Submit the form details by a user and pass it to the URL and find more products with tha name
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

//The submit button takes input by a user and calls the addProduct Function which then displays the item as described by the user
form2.addEventListener('submit', (e)=>{
    e.preventDefault();
    addProduct();

    form2.reset();
});



//This functions displays an object's properties such as image, name, description and the currency and amount
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
        <p>${itemDescription}</p>
        <p>KES : ${itemPrice}</p>
        <button class="delete">DELETE</button>`;

    customSection.appendChild(div);

    console.log(itemName);
    console.log(itemDescription);
    console.log(itemImage);
    console.log(itemCategory);
    console.log(itemPrice);
}