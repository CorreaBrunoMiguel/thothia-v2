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
