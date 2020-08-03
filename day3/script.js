/*const heading =  document.getElementById('heading');
console.log(heading);
console.log(typeof(heading));

const heading2 = document.getElementById('heading');
console.log(heading2) //ID must be unique , btt if we have two same ID then its return first id value.

const list = document.getElementById("list");
console.log(list.textContent);//textContent return the entire text containing that particular element.

list.textContent = 'Hi there'; //reassinging 'hi there' will replace the whole content of that element.
console.log(list.textContent);

list.innerHTML = '<h1> Hi there</h1>'; // same as reassinging txtContent
console.log(list.innerHTML); // its return the whole HTML content and also including tags.

const list = document.querySelector('#list');
console.log(list);

const li = document.querySelector("li");
console.log(li);

const lis = document.querySelectorAll("li");
console.log(lis); // representing a node list, node list is an array like object its items have 0 based in these number.

const listItems = document.querySelectorAll(".list-Item");
console.log(listItems);

const heading = document.getElementById('heading');
//heading.style.color = 'red';
//heading.style.backgroundColor = 'black';

heading.className = "changeBG";
//heading.className = 'changeFT';
heading.className += ' changeFT';

console.log(heading.classList);

heading.classList.add('changeCL');
console.log(heading.classList);
heading.classList.remove('changeCL');
console.log(heading.classList);


const lis = document.querySelectorAll('li');
console.log(lis);

//lis[1].style.backgroundColor = 'red';

for (let i = 0; i < lis.length; i++){

    lis[i].style.backgroundColor = 'royalblue';
}

lis[0].style.cssText = "background-color: coral; color: white; font-size: 25px";*/

const heading = document.querySelector(".heading");
const btn =   document.querySelector(".btn");

/*btn.onclick = () => {
    console.log('clicked');
};

btn.onmouseover = () => {
    heading.style.cssText = 'background-color: brown; color: white';
};

btn.onmouseout = () => {
    heading.style.cssText = 'background-color: transparent; color: black';
}*/

//const clickButton = () => {
  //  console.log('clicked');
//}

//btn.addEventListener('click',(e) => {
   // heading.style.cssText = 'background-color: brown; color: white';
   //console.log(e);
 //  console.log(e.target);
//});

/*const paragraph = document.querySelector(".paragraph");
console.log(paragraph.getAttribute("id"));
console.log(paragraph.getAttribute("class"));
 console.log(paragraph.getAttribute("title"));

  paragraph.setAttribute("style", "background-color: coral");

 paragraph.removeAttribute("style");

 console.log(paragraph.hasAttribute("style"));
 console.log(paragraph.hasAttribute("class"));*/

  const listItem = document.getElementById("list-item");
 console.log(listItem.parentElement);
 console.log(listItem.parentNode.parentNode);

  const list = document.querySelector(".list");
 //console.log(list.childNodes);
 //console.log(list.children);
 //console.log(list.firstElementChild);

 //console.log(listItem.previousElementSibling);

  const newEl = document.createElement("li");

 const text = document.createTextNode("Blog");

 newEl.appendChild(text);

 console.log(newEl);

 list.appendChild(newEl);

 list.insertBefore(newEl, list.children[1]);

// list.removeChild(newEl);

console.log(list);

