describe('Testes da Sorveteria', () => {
    let taskList;

    beforeEach(() => {
        document.body.innerHTML = `
            <input id="task-input" />
            <button id="add-task-btn">Adicionar Tarefa</button>
            <ul id="task-list"></ul>
        `;
        taskList = document.getElementById('task-list');
        require('./app'); // Importa o arquivo app.js após o DOM estar configurado
    });

    test('Deve adicionar uma nova tarefa', () => {
        const taskInput = document.getElementById('task-input');
        taskInput.value = 'Fazer sorvete de chocolate';
        document.getElementById('add-task-btn').click();

        expect(taskList.children.length).toBe(1);
        expect(taskList.children[0].textContent).toContain('Fazer sorvete de chocolate');
    });

    test('Deve remover uma tarefa', () => {
        const taskInput = document.getElementById('task-input');
        taskInput.value = 'Fazer sorvete de chocolate';
        document.getElementById('add-task-btn').click(); // Adiciona a tarefa

        expect(taskList.children.length).toBe(1); // Verifica que a tarefa foi adicionada

        // Acessando o botão de remover e clicando
        const deleteBtn = taskList.children[0].querySelector('.delete-btn');
        deleteBtn.click(); // Remove a tarefa

        expect(taskList.children.length).toBe(0); // Verifica que a tarefa foi removida
    });
});
