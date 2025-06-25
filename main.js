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
