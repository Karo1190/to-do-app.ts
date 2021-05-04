var form = document.querySelector("form");
var input = document.querySelector("textarea");
var taskList = document.querySelector(".taskList");
var clock = document.querySelector(".clock span");
var end = document.querySelector(".end span");
var search = document.querySelector(".search");
//dodawanie taska
var addTask = function (e) {
    e.preventDefault();
    var text = input.value;
    var task = document.createElement("li");
    task.className = "task";
    var icon = document.createElement("i");
    icon.className = "icon-trash-empty";
    if (text === "") {
        alert("Zadanie nie może być puste!");
        return;
    }
    var time = new Date();
    var seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    var minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    var hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    task.textContent = text + " " + hours + ":" + minutes + ":" + seconds;
    task.style.listStyleType = "none";
    taskList.appendChild(task);
    task.appendChild(icon);
    input.value = "";
    //usuwanie taska
    var deleteTask = function (e) {
        e.target.parentNode.remove();
    };
    icon.addEventListener("click", deleteTask);
    var list = document.querySelectorAll(".task");
    // const searchTask = (e) => {
    //     const searchText = e.target.value.toLowerCase()
    //     let tasks = Array.from(list);
    //     tasks = tasks.filter(liElement => liElement.textContent.toLowerCase().includes(searchText));
    //     taskList.textContent = "";
    //     tasks.forEach(li => taskList.appendChild(li));
    // }
    // search.addEventListener("input", searchTask);
};
form.addEventListener("submit", addTask);
var clockTime = function () {
    var time = new Date();
    var seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    var minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    var hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    clock.textContent = "Godzina: " + hours + ":" + minutes + ":" + seconds;
};
setInterval(clockTime, 1000);
setInterval(function () {
    var whichHour = "23:59:59";
    var whichTime = new Date().toDateString();
    var endTime = new Date(whichTime + " 23:59:59").getTime();
    var nowTime = new Date().getTime();
    // const time = Math.floor((endTime - nowTime) / 1000);
    var time = endTime - nowTime;
    var hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)));
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var secs = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
    secs = secs < 10 ? "0" + secs : secs;
    end.textContent = "Do ko\u0144ca dnia zosta\u0142o: " + hours + "h:" + minutes + "m:" + secs + "s";
}, 1000);
