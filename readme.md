# To-Do List — Projeto JavaScript

## ✅ Funcionalidades mínimas

- ✔️ Campo para adicionar tarefa com:
  - id
  - título
  - descrição
  - checkbox de status
- ✔️ Adicionar tarefa ao pressionar **Enter**
- ✔️ Marcar tarefa como concluída (via checkbox)
- ✔️ Opção de **marcar/desmarcar todas** as tarefas
- ✔️ Remover tarefa individual
- ✔️ Remover todas as tarefas
- ✔️ Salvar todas as tarefas usando **localStorage**
- ✔️ Carregar tarefas salvas automaticamente ao carregar a página
- ✔️ Testar o sistema para garantir que está funcionando
- ✔️ Mostrar opções **apenas quando houver tarefas**
- ⬜ Fazer o deploy no Vercel

---

## 🎯 Funcionalidades extras sugeridas

- ✔️ Filtros: **Todas / Concluídas / Pendentes**
- ✔️ Indicar filtro ativo por **cor no botão**
- ✔️ Editar tarefa
- ✔️ Layout responsivo (**Flexbox** ou **Grid**)
- ✔️ **Modo escuro (Dark Mode)**
- ⬜ Usar TypeScript
- ⬜ Fazer o deploy atualizado no Vercel

---

## ⚙️ Funcionamento detalhado

### ➕ Adicionar tarefa

- Usuário digita dados nos inputs
- Listener de:
  - Clique no botão
  - Tecla **Enter**
- Função:
  - Adiciona os dados no array:
    - título
    - descrição
    - id (gerado automaticamente)
    - status (por padrão: **pendente**)
  - Renderiza os dados no HTML:
    - Gera o bloco HTML da task
    - Insere no DOM

---

### ✅ Marcar/Desmarcar tarefa

- Usuário clica no checkbox da tarefa
- Listener de `change` no checkbox
- Função atualiza:
  - Status no array (`pending` ou `completed`)
  - Estilização da task no DOM

---

### 🔘 Marcar/Desmarcar **todas** as tarefas

- Usuário clica no checkbox geral
- Listener no checkbox geral:
  - Se marcado:
    - Marca todas as tarefas
    - Atualiza status de cada uma
    - Aplica estilização de "concluído"
  - Se desmarcado:
    - Desmarca todas
    - Atualiza status
    - Remove estilização
- Função para identificar se o usuário marcou todas manualmente:
  - Usa um **contador**:
    - `+1` ao marcar
    - `-1` ao desmarcar
    - `-1` ao remover uma task que estava marcada
  - Se:
    - `contador === número de tarefas` ➝ checkbox geral é **marcado**
    - `contador !== número de tarefas` ➝ checkbox geral é **desmarcado**
- Essa função executa quando:
  - Página carrega
  - Task é criada
  - Task é removida
  - Task é marcada/desmarcada

---

### 🗑️ Remover tarefa individual

- Usuário clica no botão "Remover" da tarefa
- Listener no botão
- Função:
  - Pega o ID da task
  - Remove a div da task no HTML
  - Remove a task do array

---

### 🗑️ Remover todas as tarefas

- Usuário clica no botão "Remover tudo"
- Listener no botão
- Função:
  - Exibe mensagem de confirmação
  - Se confirmado:
    - Limpa o HTML (`tasks.innerHTML`)
    - Zera o array (`allTasks = []`)
    - Zera o contador de tarefas marcadas
    - Limpa o **localStorage**
    - Salva alterações

---

### 💾 Salvar tarefas localmente

- Função para salvar:
  - Usa `localStorage`
  - Salva:
    - Array com dados das tasks
    - Contador de tarefas marcadas
    - Tema (light/dark)
- A função de salvar executa:
  - Ao adicionar tarefas
  - Ao marcar/desmarcar tarefas
  - Ao remover tarefas
  - Ao remover tudo
  - Ao mudar o tema

---

### 🔄 Carregar tarefas ao abrir a página

- Função para carregar:
  - Usa `localStorage` para:
    - Carregar dados no array
    - Carregar contador de tarefas marcadas
    - Carregar tema salvo
  - Antes de carregar:
    - Limpa a lista atual do HTML
  - Renderiza tasks no DOM
  - Verifica quais tasks carregadas estão marcadas
- Executa automaticamente ao carregar a página

---

### ✏️ Editar tarefa

- Listener no botão "Editar"
- Função:
  - Salva dados da task (ID, título, descrição)
  - Preenche os inputs da janela de edição com os dados atuais
  - Exibe janela de edição e backdrop
- Listeners dos botões:
  - **Confirmar:**
    - Atualiza array com novos dados
    - Atualiza HTML
    - Oculta janela de edição
    - Salva alterações
  - **Cancelar:**
    - Oculta janela de edição e backdrop
    - Limpa variáveis da edição
- Listener no backdrop:
  - Ao clicar ➝ fecha a janela de edição

---

### 🌙 Dark Mode

- O tema atual fica salvo em uma variável (`state.theme`)
- Tema padrão: **light**
- Usuário clica no botão de alternância do tema
- Função:
  - Carrega tema salvo no `localStorage`
  - Alterna para **dark** ou **light** de acordo com a variável `state.theme`
  - Salva a preferência no `localStorage`
- Preferência de tema é carregada automaticamente ao abrir a página

---

## 🚀 Tecnologias utilizadas

- HTML
- CSS
- JavaScript (ES6 modules)
- LocalStorage para persistência de dados

---

## 🏗️ Melhorias futuras

- [ ] Deploy no Vercel
- [ ] Refatoração para TypeScript
- [ ] Animações e melhorias no UX
- [ ] Melhorias na acessibilidade (a11y)