let input = document.querySelector('.i-1');
let tasks = document.querySelector('.tasks');
let taskDone = document.querySelector('.progress__done');
let taskInProgress = document.querySelector('.progress__in-progress');
let value;
let id = 0; // checkbox id
let count = 0; // total tasks
let countDone = 0;

function addTask() {
    id++;
    value = input.value;
    input.value = '';
    taskInProgress.innerHTML = `In progress: ${++count}`;

    function createElements() {
        const div = document.createElement('div');
        const text = document.createElement('label');
        const delBtn = document.createElement('div');

        delBtn.classList.add('close');
        text.append(value);
        tasks.appendChild(div).append(text, delBtn);
        removeTask(delBtn);

        checkbox.onchange = () => {
            if (checkbox.checked) {
                taskDone.innerHTML = `Done: ${++countDone}`;
                taskInProgress.innerHTML = `In progress: ${--count}`;
                text.classList.add('crossed');
            } else {
                taskDone.innerHTML = `Done: ${--countDone}`;
                taskInProgress.innerHTML = `In progress: ${++count}`;
                text.classList.remove('crossed');
            }
        }

        function removeTask(element) {
            element.addEventListener('click', (event) => {
                element.parentElement.remove();
                event.stopPropagation();
            });
        }

    }
}








const btn = document.querySelector('img').onclick = addTask;