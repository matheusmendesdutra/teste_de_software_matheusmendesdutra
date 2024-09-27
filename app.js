document.getElementById('add-task-btn').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskValue;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Remover';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            taskItem.remove();
        });

        taskItem.appendChild(deleteBtn);
        document.getElementById('task-list').appendChild(taskItem);

        taskInput.value = ''; // Limpa o campo de entrada
    }
});
