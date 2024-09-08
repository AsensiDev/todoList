// Variable para gestionar la tarea en edición
let editingTask = null;

// Manejador de eventos para el botón "Agregar Tarea"
document.querySelector('#addTaskBtn').addEventListener('click', () => {
    const taskInput = document.querySelector('#taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        if (editingTask) {
            // Actualiza la tarea existente
            editingTask.firstChild.textContent = taskText; // Actualiza el texto de la tarea
            
            // Elimina los botones antiguos
            const buttons = editingTask.querySelectorAll('button');
            buttons.forEach(button => button.remove());

            // Crea nuevos botones
            createButtons(editingTask);

            // Resetea la tarea en edición
            editingTask = null;
        } else {
            // Crea una nueva tarea
            const li = document.createElement('li');
            li.textContent = taskText;
            
            // Crea los botones y los añade a la tarea
            createButtons(li);
            
            document.getElementById('taskList').appendChild(li);
        }
        
        // Limpia el campo de entrada
        taskInput.value = '';
    }
});

// Función para crear los botones de "Eliminar" y "Actualizar"
function createButtons(taskElement) {
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.addEventListener('click', () => {
        taskElement.remove();
    });

    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Actualizar';
    updateBtn.addEventListener('click', () => {
        document.querySelector('#taskInput').value = taskElement.firstChild.textContent;
        editingTask = taskElement; // Permite editar esta tarea nuevamente
    });

    taskElement.appendChild(deleteBtn);
    taskElement.appendChild(updateBtn);
}
