const inputNumeroTelefone = document.getElementById('numero-telefone');
const maxLengthWarning = document.getElementById('max-length-warning');

    inputNumeroTelefone.addEventListener('input', function() {
        if (this.value.length > 11) {
            this.value = this.value.slice(0, 11);
            maxLengthWarning.style.display = 'inline'; // Exibe a mensagem de aviso
        } else {
             maxLengthWarning.style.display = 'none'; // Oculta a mensagem de aviso
            }
        });

    document.getElementById('form-atividade').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que o formulário seja enviado

        const nome = document.getElementById('nome-contato').value;
        const telefone = document.getElementById('numero-telefone').value;

        if (telefone.length === 11) {
            adicionaLinha(nome, telefone);
        } else {
            alert("Por favor, insira um número de telefone com 11 dígitos.");
            }
        });

    function adicionaLinha(nome, telefone) {
        const tbody = document.getElementById('tabela-contatos');
        const newRow = document.createElement('tr');
        const nomeCell = document.createElement('td');
        const telefoneCell = document.createElement('td');

        nomeCell.textContent = nome;
        telefoneCell.textContent = telefone;

        newRow.appendChild(nomeCell);
        newRow.appendChild(telefoneCell);

        tbody.appendChild(newRow);
        }

