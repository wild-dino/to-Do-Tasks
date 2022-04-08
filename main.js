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

    function createElements() {
        const value = input.value;
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
        const deleteBtns = document.querySelectorAll(".close");

        for (const button of deleteBtns) {
            removeTask(button);
            count++;
            taskInProgress.innerHTML = `In progress: ${count}`;
        }
    }

    input.addEventListener("keypress", (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which == keyEnter) {
            createElements();
        }
    });

    clearBtn.addEventListener("click", () => {
        tasks.innerHTML = "";
        localStorage.removeItem("tasks", tasks.innerHTML);
        count = 0;
        taskInProgress.innerHTML = `In progress: ${count}`;
    });

    addBtn.addEventListener("click", createElements);

    saveBtn.addEventListener("click", () => {
        localStorage.setItem("tasks", tasks.innerHTML);
    });

    loadTasks();
}

document.addEventListener("DOMContentLoaded", onLoaded);
