// getElementById
// select Element using get Element by id

// console.log(document.getElementById("main-heading"));
console.dir(document.getElementById("main-heading"));
console.log(typeof document.getElementById("main-heading"));

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);




// querySelector
// select Element using querySelector
const mainHead = document.querySelector("#main-heading");
console.log(mainHead);
const header = document.querySelector(".header");
console.log(header);
const navItem = document.querySelectorAll(".nav-item");
console.log(navItem);




// textContent and innerText 
// change text 

// textContent
const mainHeading1 = document.getElementById("main-heading");
console.log(mainHeading1.textContent);
// mainHeading1.textContent = "This is something else ";
// console.log(mainHeading1.textContent);


// innerText
const mainHeading2 = document.getElementById("main-heading");
console.log(mainHeading2.innerText);