Funcionalidades mínimas,
	X	Campo para adicionar tarefa com: id, título, descrição, checkbox de status,
	X	Adicionar tarefa ao pressionar Enter
	X	Marcar tarefa como concluída (via checkbox),
	X	Opção de marcar/desmarcar todas as tarefas,
	X	Remover tarefa,
	X	Remover todas as tarefas,
	X	Salvar todas as tarefas usando localStorage,
	X	Carregar tarefas salvas ao carregar a página,
	X	Testar o sistema para garantir que está funcionando,
	X	mostrar opções apenas quando houver tarefas
	Fazer o deploy no Vercel

Funcionalidades extras sugeridas,
	X	Filtros: Todas / Concluídas / Pendentes,
	X	indicar filtro ativo por cor no botão
	X	editar task
	X	Layout responsivo (com Flexbox ou Grid),
	X	Modo escuro (Dark Mode),
	Usar TypeScript,
	Fazer o deploy atualizado no Vercel

funcionamento
	add task
		User digita dados nos input
		listener de click no botão e tecla enter
		função add dados em array
			título
			descrição
			id: gerado aleatoriamente por função
			status: por padrão com status de não concluídas
		função renderizado dados no html
			aplica os dados em um bloco de código html
			insere o bloco no html
	marcar/desmarcar task
		User clica no checbox
		listener de change no checkbox
		função que atualiza status
			se foi marcada, a task recebe uma estilização diferente
			se foi desmarcada, a task perde a estilização			
	marcar/desmarcar todas as tasks
		User clica no checkbox geral
		listener de click no checkbox geral
			se foi marcado: função para marcar todos
				seleciona todas as checkbox da lista
				atuaaliza o status de cada uma para marcado
				função de atualizar status para aplicar estilização
			se foi desmarcado: função para desmarcar todos
				seleciona todas as checkbox da lista
				atuaaliza o status de cada uma para desmarcado
				função de atualizar status para remover estilização
		função para identificar caso o usuário marque todas as tarefas manualmente
			usando contador
				contador +1 ao marcar
				contador -1 ao demarcar
				contador -1 ao remover task marcada
				se contador = número de tarefas, checkbox geral marcado
				se contador != número de tarefas, checkbox geral desmarcado
			essa função é executada quando:
				a página é carregada
				task é marcada/desmarcada
				task é criada
				task é removida
	remover tarefa
		usuário clica no botão remover ao lado da task
		listener no botão
		armazenar id da task em variável
		função para remover tarefa usando a id da task
			seleciona a div da task usando a id
			remove task
	remover todas as tarefas
		usuário clica no botão remover tudo na barra de opções
		listener no botão
		função para remover tudo
			aviso e confirmação
			se confirmado
				limpar html da div da lista de tarefas
				limpar array com os dados das task
				zerar contador de tasks marcadas
				limpar localStorage
				salvar alterações
	salvar tarefas localmente
		função para salvar
			usando localStorage
			salvar array com dados das tasks
			salvar variável do contador de tarefas marcadas
			a função é executada:
				ao add tarefas
				ao marcar/desmarcar tarefas
				ao remover tarefas
				ao remover tudo
	carregar tarefas ao abrir a página
		função para carregar
			usando localStorage
				carrega os dados no array
				carrega o contador na variável
			limpar a lista antes de carregar
			função de renderizado dados no html com os dados carregados
			função para verificar tarefas carregadas marcadas
			a função é executada:
				ao carregar a página
	editar tarefa
		listener botão de editar
		salvar dados de task (id, título, descrição)
		adicionar título e descrição nos inputs da janela de edição
		exibir janela de edição e backdrop
		listeners dos botões de confirmar e cancelar
		ao confirmar:
			atualizar array de dados com novos dados
			atualizar html com novos dados
			cancelar
			salvar
		ao cancelar:
			ocultar janela de edição e bacdrop
			limpar variáveis daedição
		listener do backdrop
			ao clicar, confirmar, cancelar edição
	dark mode
		o tema escolhido fica salvo em uma variável
		tema padrão: light
		user clica no botão de mudança do tema
		executar função de carregar tema
			mudar tema de acordo com a veriável de tema
			salvar nova preferencia
		carregar preferencia ao carregar a página