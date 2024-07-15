document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('newTask');
    const submitTaskButton = document.getElementById('submitTask');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') {
            return;
        }

        const taskItem = document.createElement('li');
        const taskTextNode = document.createTextNode(taskText);
        const deleteButton = document.createElement('button');

        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskTextNode);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        newTaskInput.value = '';
    }

    submitTaskButton.addEventListener('click', addTask);

    newTaskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
