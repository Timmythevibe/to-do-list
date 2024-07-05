document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            const taskSpan = document.createElement('span');
            taskSpan.className = 'task';
            taskSpan.textContent = taskText;

            const editBtn = document.createElement('button');
            editBtn.className = 'edit';
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => editTask(taskSpan));

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => deleteTask(li));

            li.appendChild(taskSpan);
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);

            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function editTask(taskSpan) {
        const newTaskText = prompt('Edit your task:', taskSpan.textContent);
        if (newTaskText !== null) {
            taskSpan.textContent = newTaskText.trim();
        }
    }

    function deleteTask(taskElement) {
        taskList.removeChild(taskElement);
    }
});
