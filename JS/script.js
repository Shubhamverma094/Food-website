// let bars = document.querySelector(".bar");
// let ul = document.querySelector("ul");

// bars.addEventListener("click",()=>{
//     ul.classList.toggle("show");
//     console.log(ul);
    
//     if(ul.className=="show"){
//         document.getElementById("bar").className="fa-solid fa-xmark";
//     }else{
//         document.getElementById("bar").className="fa-solid fa-bars";
//     }

// })


let bars = document.querySelector(".bars");
let ul = document.querySelector("ul");

bars.addEventListener("click", () => {
    ul.classList.toggle("showdata");

    if(ul.className=="showdata"){
        document.getElementsByClassName("bars").className="fa-solid fa-xmark";
    }else{
        document.getElementsByClassName("bars").className="fa-solid fa-bars";
    }

})