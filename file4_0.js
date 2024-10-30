// change the style of Elements 
const mainHeading = document.querySelector("div.headline h2");
console.log(mainHeading.style);
mainHeading.style.backgroundColor = "grey";
mainHeading.style.border = "5px solid black";




// get and set attribute 
const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://google.com");
console.log(link.getAttribute("href"));




// Query Selector All and getElemntsbyClassName 
// get multiple elements using getElementsbyClassName
const navItems = document.getElementsByClassName("nav-item");
console.log(navItems);
console.log(navItems[0]);
console.log(typeof navItems);
console.log(Array.isArray (navItems));

// get multiple elements items using querySelectorAll
const naviItems = document.querySelectorAll(".nav-item");
console.log(naviItems);
console.log(naviItems[0]);




// Iterate elements 
// for loop
const navItems1 = document.getElementsByTagName("a");
// for(let i=0; i<navItems1.length; i++){
//     const navItem = navItems1[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
// }

// for of loop
for(let navItem of navItems1){
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
}

//we cannot use forEach loop in HTML collection 
// to change HTML collection to array 
// navItems1 = Array.from(navItems);
// console.log (Array.isArray(navItems1));


// do the same for NodeList
let nodeItems = document.querySelectorAll("a");
// use same function as above 




// InnerHTML
const headline = document.querySelector(".headline");
console.log(headline.innerHTML);
// to change inner html 
headline.innerHTML = " <h1> Inner Html changed </h1> ";
// to add button in inner html 
headline.innerHTML += "<button class = \"btn\"> Learn More </button>"
console.log(headline.innerHTML);