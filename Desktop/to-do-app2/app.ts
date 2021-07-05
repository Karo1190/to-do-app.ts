const form = document.querySelector("form");
const input = document.querySelector("textarea");
const taskList = document.querySelector(".taskList");
const clock = document.querySelector(".clock span");
const end = document.querySelector(".end span");
const search = document.querySelector(".search")




//dodawanie taska
const addTask = (e) => {
    e.preventDefault();
    const text = input.value
    const task = document.createElement("li");
    task.className = "task"
    const icon = document.createElement("i")
    icon.className = "icon-trash-empty"
    if (text === "") {
        alert("Zadanie nie może być puste!")
        return
    }
    const time = new Date();
    const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    task.textContent = `${text} ${hours}:${minutes}:${seconds}`;
    task.style.listStyleType = "none";
    taskList.appendChild(task);
    task.appendChild(icon);
    input.value = "";
    //usuwanie taska
    const deleteTask = (e) => {
        
        e.target.parentNode.remove();
    }
    icon.addEventListener("click", deleteTask)

    const list = document.querySelectorAll(".task");
    

    // const searchTask = (e) => {
    //     const searchText = e.target.value.toLowerCase()
    //     let tasks = Array.from(list);
    //     tasks = tasks.filter(liElement => liElement.textContent.toLowerCase().includes(searchText));
    //     taskList.textContent = "";
    //     tasks.forEach(li => taskList.appendChild(li));

    // }
    // search.addEventListener("input", searchTask);

}

form.addEventListener("submit", addTask);


const clockTime = () => {
    let time = new Date()
    const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    clock.textContent = `Godzina: ${hours}:${minutes}:${seconds}`

}

setInterval(clockTime, 1000);



setInterval(() => {
    let whichHour = "23:59:59"
    let whichTime = new Date().toDateString()

    const endTime = new Date(`${whichTime} 23:59:59`).getTime();
    const nowTime = new Date().getTime();
    // const time = Math.floor((endTime - nowTime) / 1000);
    const time = endTime - nowTime;

    let hours: number | string = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)));

    hours = hours < 10 ? `0${hours}` : hours;

    let minutes: number | string = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let secs: number | string = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
    secs = secs < 10 ? `0${secs}` : secs;

    end.textContent = `Do końca dnia zostało ff : ${hours}h:${minutes}m:${secs}s`

}, 1000)
