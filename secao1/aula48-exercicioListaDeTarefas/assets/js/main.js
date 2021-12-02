function tarefas() {
    const inputTarefa = document.querySelector('.input-nova-tarefa');
    const listaTarefas = document.querySelector('.tarefas');

    function criarLi() {
        return document.createElement('li');
    }
    function criarSpan() {
        return document.createElement('span');
    }

    function adicionarTarefa(texto) {
        const li = criarLi();
        const span = criarSpan();
        const btn = document.createElement('button');
        li.innerHTML = texto + ' ';
        btn.classList.add('tarefa-remover');
        btn.innerHTML = 'Remover';
        btn.title = 'Apagar Tarefa';
        li.append(btn);
        span.append(li);
        listaTarefas.appendChild(li);
    }

    function limpaInput() {
        inputTarefa.value = '';
        inputTarefa.focus();
    }

    function salvarTarefas() {
        const liTarefas = listaTarefas.querySelectorAll('li');
        const listaDeTarefas = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Remover', '');
            listaDeTarefas.push(tarefaTexto.trim());
        }
        const tarefasJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas', tarefasJSON);
    }

    function adicionaTarefasSalvasLocalStorage() {
        let tarefas = localStorage.getItem('tarefas');
        tarefas = JSON.parse(tarefas);

        for (let tarefa of tarefas) {
            adicionarTarefa(tarefa);
        }
    }
    adicionaTarefasSalvasLocalStorage();

    inputTarefa.addEventListener('keypress', (e) => {
        if (e.charCode === 13) {
            adicionarTarefa(inputTarefa.value);
            salvarTarefas();
            limpaInput();
        }
    })

    document.addEventListener('click', (e) => {
        const evento = e.target;

        if (evento.classList.contains('btn-add-tarefa')) {
            if (inputTarefa.value.length === 0) return alert('Informe uma Tarefa');
            adicionarTarefa(inputTarefa.value);
            salvarTarefas();
            limpaInput();
        }

        if (evento.classList.contains('tarefa-remover')) {
            evento.parentElement.remove();
            salvarTarefas();
            limpaInput();
        }
    })
}
tarefas();