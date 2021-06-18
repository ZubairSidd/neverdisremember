let input = document.querySelector("#list")
const button = document.querySelector("#addButton")
let myList = document.querySelector("#myList")
let listData = []

function addButtonClickHandler() {
    
    console.log(input.value);
    if(input.value !== ""){
        listData.push(input.value)
    }
    console.log(listData)
    // let li = document.createElement('li')
    // li.innerText = input.value;
    // myList.appendChild(li);
    input.value = "";
    listData.forEach((item) => {
        let li = document.createElement('li')
        li.innerHTML = item;
        myList.appendChild(li);
    })
}

button.addEventListener("click", addButtonClickHandler)