# User Stories — Games Database

## Usuários do Sistema

- Visitante (não autenticado)
- Usuário registrado

---

## 1. Explorar jogos populares

**História de usuário:**\
Como **visitante**, eu quero **visualizar uma lista de jogos populares na página inicial** para **descobrir novos jogos facilmente**.

**Critérios de aceitação:**

- A página inicial deve exibir uma seção de “Jogos Populares”.
- Cada jogo deve apresentar ao menos: título, imagem e gênero.
- A lista deve carregar automaticamente ao acessar a página.
- Deve haver no mínimo 10 jogos exibidos.
- A interface deve ser responsiva em dispositivos móveis e desktop.

---

## 2. Buscar jogos por nome

**História de usuário:**\
Como **visitante**, eu quero **pesquisar jogos pelo nome** para **encontrar rapidamente um título específico**.

**Critérios de aceitação:**

- Deve existir uma barra de busca visível na interface.
- Ao digitar um termo e pressionar “Enter” ou clicar em buscar, os resultados devem ser exibidos.
- A busca deve retornar resultados que contenham o termo no título.
- Caso não haja resultados, deve ser exibida uma mensagem informativa.
- O tempo de resposta da busca deve ser inferior a 2 segundos.

---

## 3. Filtrar jogos por categoria

**História de usuário:**\
Como **visitante**, eu quero **filtrar jogos por gênero (ação, RPG, aventura, etc.)** para **explorar jogos de acordo com minhas preferências**.

**Critérios de aceitação:**

- Deve existir um conjunto de filtros por categorias visíveis na interface.
- Ao selecionar um ou mais gêneros, a lista de jogos deve ser atualizada automaticamente.
- Os filtros devem permitir seleção múltipla (se aplicável).
- Deve ser possível limpar os filtros e retornar à lista completa.
- A aplicação não deve recarregar a página inteira ao aplicar filtros.

---

## 4. Participar do fórum

**História de usuário:**\
Como **usuário registrado**, eu quero **criar e responder tópicos no fórum** para **compartilhar opiniões e interagir com outros usuários**.

**Critérios de aceitação:**

- Apenas usuários autenticados podem criar ou responder tópicos.
- Deve ser possível criar um novo tópico com título e conteúdo.
- Deve ser possível responder a tópicos existentes.
- As postagens devem ser exibidas em ordem cronológica.
- O sistema deve validar campos obrigatórios (título e conteúdo não podem estar vazios).
- Após postar, o conteúdo deve aparecer imediatamente no fórum.

---

## Observações

- O sistema deve priorizar uma interface moderna, intuitiva e responsiva.
- Tecnologias base: HTML, CSS e JavaScript.
- Foco em experiência do usuário e performance.

