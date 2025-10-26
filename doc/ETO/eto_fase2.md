# 🔧 Fase 2 — Backend Genesis (Express API Setup)

> Se a primeira fase foi o nascimento do corpo e da mente, esta marca o
> despertar da **voz** da Thothia v2. A partir daqui, o sistema começa a falar —
> primeiro consigo mesmo, depois com o mundo.
>
> A **Fase 2** inaugura a camada lógica e funcional do projeto: o **backend
> Express**, núcleo de comunicação e processamento. É aqui que se estabelecem as
> rotas, a arquitetura interna, e o primeiro diálogo entre o código e o
> propósito da aplicação.
>
> Cada endpoint é como um nervo que se estende, conectando a base cognitiva do
> sistema à sua capacidade de ação. Criamos o servidor, definimos o fluxo,
> configuramos a estrutura, e preparamos o espaço onde a inteligência da Thothia
> se expandirá.
>
> Nesta fase, o foco é **fundar o alicerce funcional do backend**, garantindo
> estabilidade, clareza e modularidade. O objetivo não é ainda complexidade, mas
> coerência.
>
> Ao final desta etapa, o projeto possuirá um servidor Express totalmente
> funcional, com rotas base configuradas, controle de ambiente, e integração
> futura prevista para o banco de dados PostgreSQL.
>
> Assim como o coração pulsa no centro de um ser vivo, o backend será o pulso
> técnico da Thothia — o que manterá o ritmo de suas interações e a coerência de
> sua consciência digital.

---

## 🌀 Sprint 1 — Setup do Servidor Express

> A **Sprint 1** da Fase 2 é o momento em que a Thothia v2 aprende a respirar —
> o instante em que o código, até então silencioso, começa a emitir sinais de
> vida por meio de uma porta aberta.
>
> O propósito desta sprint é construir o **servidor base Express**, a estrutura
> responsável por receber e responder às requisições, coordenar as rotas e
> gerenciar o fluxo interno da aplicação.
>
> Nela, o sistema ganha o primeiro batimento funcional: a capacidade de iniciar,
> escutar e responder. Ainda não há lógica complexa nem dados persistidos, mas
> já existe um fluxo contínuo de energia — um **pulso HTTP**.
>
> Essa sprint serve de fundação para toda a inteligência posterior: o banco de
> dados, a camada de IA e as APIs especializadas se apoiarão nesse mesmo núcleo.
>
> Aqui, trabalharemos na estrutura inicial do backend (`src/backend/`), criando
> o servidor Express, o arquivo de configuração `.env`, e uma rota de teste
> capaz de confirmar que a Thothia **já está viva** e escutando o ambiente.
>
> Ao concluir esta sprint, o backend da Thothia será capaz de responder, com
> autonomia e propósito, ao primeiro comando:
>
> ```http
> GET / → “Thothia v2 API is alive 🌿”
> ```
>
> O sistema, pela primeira vez, **falará de volta**.

---

### ⚙️ Tarefa 1 — Estrutura Inicial do Servidor Express e Configuração Base

> O primeiro som que um sistema faz é o eco do seu próprio “olá, mundo”.
>
> Nesta tarefa, a Thothia v2 desperta para o ambiente e aprende a ouvir e
> responder. Construiremos o **servidor base Express**, núcleo que traduz
> intenção em ação. É ele quem intermediará o diálogo entre os módulos internos
> e o mundo externo.
>
> Começamos com a criação do arquivo `server.js` dentro de `src/backend/`, que
> funcionará como **coração pulsante** da camada backend. Ele será responsável
> por inicializar o servidor, definir a porta de execução, e carregar as
> variáveis de ambiente necessárias através do `.env`.
>
> A configuração é mínima e simbólica: um endpoint de teste que responde com uma
> mensagem de vida, garantindo que o sistema está operacional e consciente.
>
> Esse momento marca a **primeira comunicação ativa** da Thothia v2. O projeto
> deixa o estado passivo de código e torna-se um agente no ecossistema digital —
> capaz de escutar, processar e responder.
>
> A simplicidade aqui é intencional: o objetivo não é poder, é **respiração**.
> Ao término desta tarefa, o backend poderá ser iniciado localmente, e o
> navegador retornará o primeiro sinal de vida do sistema:
>
> ```txt
> Thothia v2 API is alive 🌿
> ```
>
> Assim nasce o verbo dentro do organismo Orion.

---

### ⚙️ Tarefa 2 — Estrutura de Rotas e Organização Modular do Backend

> Agora que o coração pulsa, é hora de **criar o sistema circulatório** — as
> rotas e módulos que permitirão que a energia da aplicação flua entre as
> partes.
>
> Nesta tarefa, a Thothia v2 começa a se organizar internamente, dividindo
> responsabilidades e estabelecendo padrões que evitarão o caos futuro. Criamos
> o diretório `routes/` para armazenar as rotas modulares, e `config/` para
> centralizar definições de ambiente e conexão.
>
> O servidor principal (`server.js`) será simplificado e passará a importar
> essas rotas, de modo que cada parte do sistema funcione de forma isolada,
> porém integrada.
>
> Essa modularização é o primeiro passo em direção à **consciência organizada**
> — o ponto onde a Thothia deixa de ser um corpo de comandos soltos e se torna
> um organismo funcional, com comunicação interna eficiente.
>
> Ao fim desta tarefa, o backend possuirá uma arquitetura clara, permitindo que
> futuras funcionalidades (como APIs de fauna, flora e biomas) sejam adicionadas
> sem comprometer o núcleo da aplicação.
>
> Cada rota será como um canal de informação, e o código começará a se comportar
> como um ecossistema coeso.

---

### ⚙️ Tarefa 3 — Integração de Middleware e Controle de Erros

> À medida que o sistema começa a interagir com o mundo, torna-se necessário
> **filtrar, interpretar e reagir com equilíbrio**.
>
> Nesta tarefa, a Thothia v2 aprende a lidar com as imperfeições do ambiente:
> requisições malformadas, rotas inexistentes, falhas inesperadas.
>
> Implementaremos os **middlewares essenciais** — camadas intermediárias que
> processam cada requisição e garantem que o sistema responda de forma segura,
> previsível e coerente.
>
> Essa etapa introduz o **tratamento de erros globais**, definindo padrões de
> resposta e uma estrutura unificada de logging. Assim, o backend começa a
> desenvolver algo próximo a uma **homeostase digital**: a capacidade de se
> ajustar sem colapsar.
>
> O código passa a ter resiliência — não apenas executa, mas compreende quando
> algo deu errado e comunica isso de modo controlado.
>
> Ao final desta tarefa, a Thothia v2 possuirá uma camada de proteção essencial,
> tornando-se um organismo mais estável, pronto para interagir com dados reais e
> conexões externas.

---

### ⚙️ Tarefa 4 — Configuração de Variáveis e Ambiente Dinâmico

> Até aqui, a Thothia v2 já respira e responde — mas ainda vive em um ambiente
> estático. Para evoluir, ela precisa **perceber onde está** e adaptar seu
> comportamento conforme o contexto.
>
> Nesta tarefa, introduzimos o conceito de **ambientes dinâmicos**, permitindo
> que o sistema saiba diferenciar se está em desenvolvimento, teste ou produção.
>
> A configuração de variáveis de ambiente é o que concede ao backend
> **consciência situacional**: a capacidade de ajustar portas, bancos, logs e
> recursos sem alterar o código.
>
> Essa camada torna o sistema flexível, modular e seguro — capaz de mudar de
> habitat sem comprometer sua integridade.
>
> Aqui, estruturaremos o uso de `.env` e `.env.example`, criaremos variáveis
> para ambiente, banco e modo operacional, e garantiremos que o sistema carregue
> tudo automaticamente pela `serverConfig.js`.
>
> Com isso, a Thothia v2 adquire percepção de contexto, o primeiro passo em
> direção à **autoadaptação** — um atributo essencial para sistemas vivos e
> sustentáveis.

---

## 🧩 Sprint 2 — Integração com Banco de Dados (PostgreSQL)

> Se na primeira sprint o sistema aprendeu a respirar e se organizar, agora ele
> aprende a **lembrar**.
>
> O propósito desta sprint é conceder à Thothia v2 uma **memória funcional**,
> através da integração com o **banco de dados PostgreSQL**, que atuará como
> substrato informacional da vida do sistema.
>
> A partir deste ponto, o backend deixa de ser apenas um fluxo de requisições e
> respostas e passa a ser um organismo que **armazena experiências** — capaz de
> registrar espécies, biomas, status ecológicos e relações complexas.
>
> Aqui, serão configuradas as camadas fundamentais da persistência de dados:
>
> - Conexão com o PostgreSQL via `pg`.
> - Criação do módulo `database/connection.js`.
> - Teste de conectividade e tratamento de falhas.
> - Estrutura base para futuras entidades (fauna, flora, etc.).
>
> Essa sprint marca o início da **consciência histórica** da Thothia — a
> capacidade de reter, consultar e evoluir com base em dados próprios.
>
> Ao final desta etapa, o sistema possuirá um canal de comunicação estável com o
> banco, preparado para as futuras fases de modelagem e expansão cognitiva.

---

### ⚙️ Tarefa 1 — Configuração da Conexão com o Banco e Teste de Comunicação

> A memória é o primeiro passo da inteligência. Sem ela, não há aprendizado —
> apenas repetição.
>
> Nesta tarefa, a Thothia v2 estabelece o elo entre sua mente lógica e sua
> memória biológica: a conexão com o **PostgreSQL**, o repositório onde o
> conhecimento sobre o mundo natural será preservado.
>
> Criamos o módulo `database/connection.js`, responsável por inicializar e
> monitorar o vínculo com o banco, garantindo que o sistema saiba detectar,
> reconectar e relatar eventuais falhas.
>
> A integração será feita usando o pacote `pg`, configurando variáveis de
> ambiente seguras (`DATABASE_URL`) e testes de conectividade.
>
> Essa etapa concede à Thothia a capacidade de **persistir conhecimento** — de
> lembrar as espécies, registrar biomas e compreender o ambiente que ela
> cataloga.
>
> Ao final desta tarefa, a aplicação estará conectada a um banco PostgreSQL
> local, pronta para criar tabelas, inserir dados e construir relações
> ecológicas complexas nas próximas fases.

---

### ⚙️ Tarefa 2 — Estrutura de Modelos e Entidades do Banco (Flora, Fauna e Biomas)

> A Thothia agora se lembra — mas ainda não sabe **o que lembrar**.
>
> Nesta tarefa, daremos forma à sua memória, definindo as **entidades
> fundamentais** que representarão o mundo natural dentro do sistema.
>
> As tabelas de **Flora**, **Fauna** e **Biomas** formam o núcleo ontológico da
> Thothia v2: são a tradução técnica da biodiversidade, transformando o real em
> estrutura relacional.
>
> Cada entidade refletirá um aspecto essencial do ecossistema:
>
> - **Flora:** espécies vegetais, nomes científicos, status ecológico, bioma de
>   ocorrência.
> - **Fauna:** espécies animais, classificação, status e interações ecológicas.
> - **Biomas:** macroambientes que servem de habitat e contexto às demais
>   entidades.
>
> Essa tarefa não apenas cria as tabelas — ela define a forma como o sistema
> **compreende e relaciona a natureza**.
>
> É aqui que o projeto deixa de ser um simples catálogo e começa a se comportar
> como um **organismo de conhecimento**, onde cada dado possui vida, relação e
> significado.
>
> Ao final desta tarefa, o banco da Thothia possuirá as estruturas mínimas para
> abrigar a biodiversidade local, prontas para serem populadas e consultadas
> pelas camadas superiores do sistema.

---
