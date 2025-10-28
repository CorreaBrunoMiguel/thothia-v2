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

### ⚙️ Tarefa 3 — CRUD Base de Biomas

> Agora que as estruturas fundamentais estão erigidas, é hora de conceder
> movimento a esses dados — de permitir **interação e transformação**.
>
> Nesta tarefa, implementaremos o **CRUD Base de Biomas** (Create, Read, Update,
> Delete), a primeira manifestação prática da persistência viva da Thothia v2.
>
> Essa funcionalidade permitirá que o sistema crie, liste, atualize e remova
> registros de biomas, fornecendo o alicerce para as relações ecológicas que
> virão em seguida (flora e fauna).
>
> Cada operação do CRUD será uma forma de manipular a “geografia interna” da
> Thothia, onde cada bioma é um ecossistema conceitual pronto para receber
> espécies e dados ambientais.
>
> Ao implementar esse CRUD, a aplicação passa a ser **autônoma na manipulação de
> seu próprio conhecimento ambiental**, tornando-se um verdadeiro **sistema
> biológico digital** — capaz de criar, evoluir e regenerar sua base de
> informação.
>
> Ao final desta tarefa, teremos endpoints REST funcionais para gerenciar
> biomas, integrados ao PostgreSQL, testados e documentados, marcando o início
> da camada ativa de dados da Thothia v2.

---

### ⚙️ Tarefa 4 — CRUD Base de Flora

> A Thothia começa agora a observar a vegetação que a cerca. Depois de entender
> os biomas que sustentam a vida, ela precisa **registrar e compreender as
> formas vegetais** que habitam esses ecossistemas.
>
> Nesta tarefa, será implementado o **CRUD Base de Flora**, responsável por
> criar, listar, atualizar e remover espécies vegetais.
>
> Cada registro representará uma planta dentro de um bioma, contendo informações
> científicas, nomes populares e status ecológico.
>
> Esta camada é mais do que um simples cadastro — é a primeira instância de
> **vida registrada** no sistema, um passo essencial para o sonho da catalogação
> viva da Thothia v2.
>
> A integração seguirá os mesmos princípios modulares do CRUD de Biomas,
> mantendo consistência, simplicidade e clareza de comunicação entre os módulos.
>
> Ao final desta tarefa, a Thothia possuirá o **módulo de Flora totalmente
> funcional**, capaz de armazenar e gerenciar informações botânicas de forma
> independente e escalável — consolidando o backend como uma verdadeira base de
> conhecimento ecológico.

---

### ⚙️ Tarefa 5 — CRUD Base de Fauna

> Depois de registrar a vida vegetal, a Thothia passa a observar o **movimento**
> — os seres que caminham, voam, rastejam e nadam pelos biomas que ela agora
> compreende.
>
> Nesta tarefa, daremos forma à **Fauna**, a entidade que representará as
> espécies animais do ecossistema, completando o triângulo vital da base
> biológica (Biomas, Flora e Fauna).
>
> O **CRUD Base de Fauna** permitirá ao sistema criar, listar, atualizar e
> remover registros de espécies animais, preservando informações taxonômicas,
> ecológicas e de status ambiental.
>
> A integração seguirá o mesmo padrão modular do CRUD de Flora, garantindo
> consistência arquitetural e semântica.
>
> Cada animal registrado será um ponto vivo no mapa da biodiversidade da Thothia
> — um elo entre a informação técnica e o espírito natural que guia o projeto.
>
> Ao final desta tarefa, o backend terá a **estrutura completa para representar
> toda a base ecológica do sistema**, tornando-se um organismo digital capaz de
> armazenar e relacionar dados sobre a vida em todas as suas formas.

---

## 🧠 Sprint 3 — API Consolidada e Integração de Camada de Serviços

> Até aqui, a Thothia construiu suas bases vitais: corpo, memória e ecossistema
> interno. Agora, ela precisa **conectar** essas partes em uma inteligência
> unificada — uma API coesa, documentada e pronta para se comunicar com o mundo
> externo.
>
> Nesta sprint, a aplicação entra em um novo estágio de consciência operacional:
> a consolidação de suas rotas, controladores e camadas de serviço sob uma
> arquitetura escalável.
>
> O objetivo é introduzir a **Camada de Serviços (Service Layer)**, responsável
> por mediar a lógica de negócio entre os controladores e o banco de dados. Essa
> camada permitirá validações, normalizações e pré-processamentos antes das
> queries — o que traz clareza, segurança e manutenibilidade à API.
>
> Além disso, esta sprint unifica todas as entidades (Biomas, Flora, Fauna) sob
> uma **documentação REST consolidada**, garantindo consistência nos padrões de
> resposta e no comportamento das rotas.
>
> É o momento em que a Thothia deixa de ser apenas uma coleção de módulos e se
> transforma em um **organismo cognitivo**: capaz de se comunicar com clareza,
> validar suas próprias ações e servir dados limpos e coerentes.
>
> Ao final desta sprint, o backend terá uma API madura e padronizada, pronta
> para ser consumida por interfaces web, aplicações móveis ou integrações de IA.

---

### ⚙️ Tarefa 1 — Criação da Camada de Serviços e Padronização de Respostas da API

> Até agora, cada módulo da Thothia age de forma autônoma, direta, e eficaz —
> mas ainda falta **coerência entre suas ações**.
>
> A Camada de Serviços (Service Layer) surge como o **elo de harmonia** entre os
> controladores e o banco de dados. Sua função é mediar o diálogo, aplicar
> validações, regras de negócio, e garantir que todas as respostas da API sejam
> padronizadas e semanticamente consistentes.
>
> Essa camada age como uma consciência intermediária: ela interpreta intenções,
> previne erros, assegura integridade e entrega respostas claras.
>
> A padronização das respostas, por sua vez, dá forma à linguagem da Thothia —
> toda requisição, sucesso ou erro será expresso com estrutura previsível e
> documentável.
>
> Nesta tarefa, criaremos o módulo `services/`, um **núcleo lógico** onde serão
> processadas as operações de Biomas, Flora e Fauna antes de atingir o banco.
>
> Além disso, introduziremos um **Response Handler universal**, garantindo que a
> API fale sempre com uma mesma voz, clara e expressiva, transformando a Thothia
> em um sistema coeso e autoexplicativo.
>
> Ao final desta tarefa, a aplicação passará a operar sob uma **arquitetura em
> três camadas** (Controller → Service → Database), inaugurando um novo patamar
> de maturidade cognitiva e organizacional.

---

### ⚙️ Tarefa 2 — Middleware de Validação e Tratamento de Erros Avançado _(Resumo copiável)_

> À medida que a API ganha voz e alcance, cresce também a necessidade de
> **disciplina no diálogo**. Esta tarefa introduz uma camada de **validação
> explícita** — um filtro consciente que garante que apenas dados íntegros
> atravessem o sistema — e eleva o **tratamento de erros** a um nível semântico,
> padronizado e auditável.
>
> Criaremos um **middleware de validação** capaz de inspecionar `params`,
> `query` e `body`, retornando respostas consistentes quando regras forem
> violadas. A validação residirá próxima à **Service Layer**, preservando
> controladores enxutos e garantindo coesão entre intenção e execução.
>
> Em paralelo, estenderemos o **error handler** para suportar **códigos,
> categorias e correlações** (p. ex., `VALIDATION_ERROR`, `NOT_FOUND`,
> `CONFLICT`, `INTERNAL_ERROR`), permitindo observabilidade e rastreio de
> incidentes sem ruído. Cada falha deixa de ser uma exceção anônima e passa a
> ser um **evento interpretável**.
>
> O resultado é uma API que comunica com clareza: quando aceita, **confirma**;
> quando recusa, **explica** — sempre no mesmo formato e com metadados
> suficientes para instrumentação futura (logs, métricas, APM).
>
> Ao concluir esta tarefa, a Thothia v2 operará com **higiene de entrada** e
> **erros inteligíveis**, pronta para escalar com segurança, reduzir ambiguidade
> e acelerar o diagnóstico de problemas no ciclo de desenvolvimento.
