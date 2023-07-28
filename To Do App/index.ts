const input: HTMLInputElement= document.getElementById("input-box") as HTMLInputElement
const button: HTMLElement = document.getElementById("button") as HTMLElement
const listContainer: HTMLElement = document.getElementById("list-container") as HTMLElement


function addTask():void {
    if (input.value === ''){
        alert("Field can not be empty!")
    } else {
        let li = document.createElement("li")
        li.innerHTML = input.value
        listContainer.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML ='\u00d7'
        li.appendChild(span)
    }
    input.value = ''
    saveData()
}

button.addEventListener("click", addTask)

input.addEventListener("keypress", (event)=>{
    if (event.key === "Enter")
    {
        addTask()
    }
})

listContainer.addEventListener('click', (event)=>{
    const target = event.target as HTMLElement
    if (target.tagName ==="LI"){
        target.classList.toggle("checked")
    }
    else if (target.tagName ==="SPAN"){
        target.parentElement?.remove()
    }
    saveData()

})


function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem('data') as string
}

showTasks()
