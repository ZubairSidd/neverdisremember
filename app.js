let input = document.querySelector("#list")
const button = document.querySelector("#addButton")
let myList = document.querySelector("#myList")
// let listData = []

function addButtonClickHandler() {

    // console.log(input.value);
    if (input.value !== "") {
        // listData.push(input.value)
        let li = document.createElement('li')
        let btn = document.createElement('button')
        btn.innerHTML = "";
        li.innerHTML = input.value;  
        myList.appendChild(li);
        myList.appendChild(btn);
        // li.innerHTML = input.value + btn.outerHTML;
        // myList.appendChild(li)
        btn.addEventListener("click", function(){
            myList.removeChild(li);
            myList.removeChild(btn);
        })
        input.value = "";
    }

    
    // listData.forEach((item) => {
    //     let li = document.createElement('li')
    //     li.innerHTML = item;
    //     myList.appendChild(li);
    // })
}

button.addEventListener("click", addButtonClickHandler)