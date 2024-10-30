// Little practice with click event 
const allButtons = document .querySelectorAll(".my-buttons button");
allButtons.forEach(button => {
    button.addEventListener("click", (e)=> {
        // console.log(e.target);
        e.target.style.backgroundColor = "red";
        e.target.style.color = "white";
    })
})