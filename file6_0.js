const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
// const info = sectionTodo.getBoundingClientRect().height;
// const info = sectionTodo.getBoundingClientRect().width;
// const info = sectionTodo.getBoundingClientRect().top;
console.log(info);




// Intro to events 
const btn = document.querySelector(".btn-headline");
// function clickMe(){
//     console.log("you clicked meeeee");
// }
btn.addEventListener("click", function(){
    console.log("you clicked meeeee");
});




// This keyword inside addEventListener callback 
btn.addEventListener("click", function(){
    console.log("you clicked meeeee");
    console.log(this);
});
// using arrow function
btn.addEventListener("click",()=>{
    console.log("you clicked meeeee");
    console.log(this);
});