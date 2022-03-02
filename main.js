let input = document.querySelector('.i-1');
let tasks = document.querySelector('.tasks');
let taskDone = document.querySelector('.progress__done');
let taskInProgress = document.querySelector('.progress__in-progress');
let count = 0; // total tasks
let countDone = 0;

function addTask() {
    const value = input.value;
    createElements();
    
    function createElements() {
        const div = document.createElement('div');
        const text = document.createElement('label');
        const delBtn = document.createElement('div');

        delBtn.classList.add('close');
        text.append(value);
        tasks.appendChild(div).append(text, delBtn);
        taskInProgress.innerHTML = `In progress: ${++count}`;
        input.value = '';
        
        removeTask(delBtn);
    }

    function removeTask(element) {
        element.addEventListener('click', (event) => {
            element.parentElement.remove();
            taskDone.innerHTML = `Done: ${++countDone}`;
            taskInProgress.innerHTML = `In progress: ${--count}`;
            event.stopPropagation();
        });
    }
}








const btn = document.querySelector('img').onclick = addTask;