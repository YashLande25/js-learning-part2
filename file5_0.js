// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[0];
// // console.log(htmlElementNode.childNodes); NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode.childNodes);
// sibling relation 
// const h1 = document.querySelector("h1");
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const body = document.body
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const head = document.querySelector("head");
// // console.log(head);
// const title = head.querySelector("title");
// console.log(title.childNodes);
const container = document.querySelector(".container");
console.log(container.children);




// ClassList, add and remove, toggle classes
// to find of classes
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList);
// to give class using javascript 
sectionTodo.classList.add('bg-dark');
// to remove class 
sectionTodo.classList.remove('bg-dark');
// to know whether a class exists or not 
const exist = sectionTodo.classList.contains('container');
console.log(exist);
// toggle 
sectionTodo.classList.toggle('bg-dark');
sectionTodo.classList.toggle('bg-dark');



// Add html elements using javascript 
const todoList = document.querySelector(".todo-List");
// todoList.innerHTML += "<li>new todo</li>";



// createElement 
const newTodoItem = document.createElement("li");
// console.log(newTodoItem);
const newTodoItemText = document.createTextNode("teach student");
// or 
newTodoItem.textContent = "teach student";
newTodoItem.appendChild(newTodoItemText); 
// const todoList = document.querySelector(".todo-List");
// append
// todoList.append(newTodoItem);    
console.log(newTodoItem);
//prepend
// todoList.prepend(newTodoItem); 
// remove 
const todo1 = document.querySelector(".todo-list li ");
todo1.remove();
console.log(todo1);

// before 
// after
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.after(newTodoItem);




// clone nodes
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2);




// some old methods to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild
// const ul = document.querySelector(".todo-list");

// new element
// const li = document.createElement("li");
// li.textContent = "new todo";


// const referenceNode = document.querySelector(".first-todo");

// ul.removeChild(referenceNode);



// Static list vs live list 

// querySelector will give us nodelist for static list 
// getElementby Something will give us html collection for Live list 
// Static list 
// const listItems = document.querySelectorAll(".todo-list li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";
// const uul = document.querySelector(".todo-list");
// uul.append(sixthLi);        // item 6 will be displayed on page but it will not reflect in console as we are using querySelector for static list 
// console.log(listItems);

// Livelist 
const uul = document.querySelector(".todo-list");
const listItems = uul.getElementsByTagName("li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
uul.append(sixthLi);        // item 6 will be displayed on page and also will be reflected in console as we are using getElement for live list 
console.log(listItems);