Rastreador de Tarefas CLI
O Rastreador de Tarefas CLI é uma aplicação de linha de comando simples em JavaScript que permite aos usuários gerenciar suas tarefas diárias. Ele oferece funcionalidades para adicionar, visualizar, listar e marcar tarefas como concluídas, proporcionando uma maneira prática de acompanhar o progresso.

Funcionalidades
Adicionar Tarefa: Permite adicionar uma nova tarefa.
Listar Tarefas: Exibe todas as tarefas cadastradas.
Marcar Tarefa como Concluída: Marca uma tarefa como concluída.
Excluir Tarefa: Exclui uma tarefa da lista.
Como executar este projeto:
Abra um terminal e navegue até o diretório do projeto.

Execute node <filename>.js <command> <arguments>

Exemplo:
bash
node task-cli.js adicionar "Comprar mantimentos"
Comandos disponíveis:
add <descrição da tarefa> - Adiciona uma nova tarefa

update <ID da tarefa> <nova descrição> - Atualiza uma tarefa existente

delete <ID da tarefa> - Exclui uma tarefa

mark-in-progress <ID da tarefa> - Marca uma tarefa como em andamento

mark-done <ID da tarefa> - Marca uma tarefa como concluída

list [status] - Lista as tarefas (todas, concluídas, a fazer, em andamento)

Contribuição
Contribuições são bem-vindas! Para contribuir:

Faça um fork deste repositório.
Crie uma branch para sua funcionalidade (git checkout -b feature/nome-da-funcionalidade).
Comite suas mudanças (git commit -m 'Adicionando nova funcionalidade').
Envie para o repositório (git push origin feature/nome-da-funcionalidade).
Abra um pull request.
Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
