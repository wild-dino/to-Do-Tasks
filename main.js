function onLoaded() {
    const input = document.querySelector(".i-1");
    const tasks = document.querySelector(".tasks");
    const taskDone = document.querySelector(".progress__done");
    const taskInProgress = document.querySelector(".progress__in-progress");
    const addBtn = document.querySelector(".add");
    const saveBtn = document.querySelector(".save");
    const clearBtn = document.querySelector(".clear");
    let count = 0; // total tasks
    let countDone = 0;

    function addTask() {
        const value = input.value;
        createElements();

        function createElements() {
            const div = document.createElement("div");
            const text = document.createElement("label");
            const delBtn = document.createElement("div");

            div.classList.add("task-text");
            delBtn.classList.add("close");
            text.append(value);
            tasks.appendChild(div).append(text, delBtn);
            taskInProgress.innerHTML = `In progress: ${++count}`;
            input.value = "";

            removeTask(delBtn);
        }

        function removeTask(element) {
            element.addEventListener("click", (event) => {
                element.parentElement.remove();
                taskDone.innerHTML = `Done: ${++countDone}`;
                taskInProgress.innerHTML = `In progress: ${--count}`;
                event.stopPropagation();
            });
        }

        function loadTasks() {
            const data = localStorage.getItem("tasks");
            if (data) {
                tasks.innerHTML = data;
            }
        }

        loadTasks();
    }

    input.addEventListener("keypress", (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which == keyEnter) {
            addTask();
        }
    });

    addBtn.addEventListener("click", addTask);

    saveBtn.addEventListener("click", () => {
        localStorage.setItem("tasks", tasks.innerHTML);
    });
}

document.addEventListener("DOMContentLoaded", onLoaded);
