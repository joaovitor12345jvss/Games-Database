const gamesData = [ //Lista dos jogos
    {
        title: "Elden Ring",
        genre: ["RPG", "Ação", "Soulsborne"],
        image: "Imagens/elden_ring_capa.jpg",
        detailsLink: "#",
        keywords: ["mundo aberto", "fantasia", "ação", "soulsborne"]
    },
    {
        title: "God of War Ragnarok",
        genre: ["Ação", "Aventura"],
        image: "Imagens/god_of_war_ragnarok_capa.jpg",
        detailsLink: "#",
        keywords: ["ação", "aventura", "combate", "mitologia", "historia"]
    },
    {
        title: "Cyberpunk 2077",
        genre: ["RPG", "FPS"],
        image: "Imagens/cyberpunk_capa.webp",
        detailsLink: "#",
        keywords: ["futurista", "fps", "mundo aberto", "tiro"]
    },
    {
        title: "Forza Horizon 6",
        genre: ["Corrida"],
        image: "Imagens/FH6_cover.webp",
        detailsLink: "#",
        keywords: ["corrida", "carros", "mundo aberto"]
    },
    {
        title: "The Legend of Zelda: Tears of the Kingdom",
        genre: ["Aventura", "Estratégia"],
        image: "Imagens/zelda_TOTK_capa.jpg",
        detailsLink: "#",
        keywords: ["aventura", "exploração", "mundo aberto", "link"]
    },
    {
        title: "Grand Theft Auto V",
        genre: ["FPS", "Ação"],
        image: "Imagens/GTA_Capa.png",
        detailsLink: "#",
        keywords: ["ação", "mundo aberto", "carros", "tiro"]
    },
    {
        title: "Street Fighter 6",
        genre: ["Luta"],
        image: "Imagens/Street_Fighter_6_capa.jpg",
        detailsLink: "#",
        keywords: ["luta"]
    },
    {
        title: "Devil May Cry 5",
        genre: ["Ação"],
        image: "Imagens/dmc_5_capa.jpg",
        detailsLink: "#",
        keywords: ["Ação", "Hack n Slash"]
    },
    {
        title: "Resident Evil Requiem",
        genre: ["Terror", "Ação", "Estratégia"],
        image: "Imagens/RE9.jpg",
        detailsLink: "#",
        keywords: ["ação", "tiro", "terror"]
    },
    {
        title: "Metal Gear Solid",
        genre: ["Ação", "Estratégia"],
        image: "Imagens/mgs_capa.webp",
        detailsLink: "#",
        keywords: ["ação", "stealth", "história", "tático", "tiro"]
    },
];

// Funções

//Função lista

const gameListContainer = document.getElementById('game-list');
const searchInput = document.getElementById('search-input');
const genreFiltersContainer = document.querySelector('.genre-filters');
const forumPostsContainer = document.getElementById('forum-posts');
const btnNewPost = document.querySelector('.btn-new-post');

function createGameCardHTML(game) {
    const genresDisplay = game.genre.join(', ');
    return `
       <article class="game-card">
            <img src="${game.image}" alt="Capa do Jogo ${game.title}">
            <h3>${game.title}</h3>
            <p class="game-genre">${genresDisplay}</p> <a href="${game.detailsLink}" class="btn-details">Ver Detalhes (Sinopse, História, Gameplay)</a>
        </article>
    `;
}

function renderGameList(gamesToRender) {
    gameListContainer.innerHTML = '';

    if (gamesToRender.length === 0) {
        gameListContainer.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">Nenhum jogo encontrado com os critérios de busca.</p>';
        return;
    }

    const cardsHTML = gamesToRender.map(createGameCardHTML).join('');
    gameListContainer.innerHTML = cardsHTML;

    const cardsElements = gameListContainer.querySelectorAll('.game-card');

    cardsElements.forEach((cardElement, index) => {
        cardElement.addEventListener('click', (event) => {
            event.preventDefault();

            openGameModal(gamesToRender[index]);
        });
    });
}
// Função pesquisa do jogo

let currentFilterGenre = 'all';

function filterGames() {
    const searchTerm = searchInput.value.toLowerCase();

    const filteredGames = gamesData.filter(game => {
        const fullSearchString = `${game.title.toLowerCase()} ${game.keywords.join(' ')}`;
        const textMatch = fullSearchString.includes(searchTerm);

        const genreFilterMatch = currentFilterGenre === 'all' ||
            game.genre.map(g => g.toLowerCase()).includes(currentFilterGenre);

        return textMatch && genreFilterMatch;
    });

    renderGameList(filteredGames);
}

function setupGenreFilters() {
    const allButton = document.createElement('button');
    allButton.className = 'filter-btn active';
    allButton.textContent = 'Todos';
    allButton.dataset.genre = 'all';
    genreFiltersContainer.prepend(allButton);

    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));

            button.classList.add('active');

            currentFilterGenre = button.dataset.genre.toLowerCase();

            filterGames();
        });
    });
}

//Função forum

function createNewPost() {
    // 1. Verifica se o usuário está logado usando o LocalStorage
    const loggedUser = localStorage.getItem('loggedUser');

    // 2. Se não estiver, bloqueia e redireciona para o login
    if (!loggedUser) {
        alert("Você precisa fazer login para criar um post no fórum.");
        window.location.href = 'login.html';
        return;
    }

    const title = prompt("Digite o título do seu post:");
    if (!title) return;

    const content = prompt("Digite o conteúdo do seu post:");
    if (!content) return;

    const date = new Date().toLocaleDateString('pt-BR');

    // 3. Usa o nome do usuário logado na postagem (substituindo "Novo Fã")
    const user = loggedUser;

    const newPostHTML = `
        <div class="forum-post new-post">
            <h4>${title}</h4>
            <p>${content}</p>
            <span class="post-meta">Postado por ${user} em ${date}</span>
        </div>
    `;

    forumPostsContainer.insertAdjacentHTML('afterbegin', newPostHTML);
}

// Lógica extra de Inicialização para tratar o menu (adicione dentro do DOMContentLoaded)
document.addEventListener('DOMContentLoaded', () => {

    const loggedUser = localStorage.getItem('loggedUser');
    const authLinkContainer = document.getElementById('auth-link-container');

    if (loggedUser) {
        // Se estiver logado, exibe o nome do usuário e um botão de sair
        authLinkContainer.innerHTML = `
            <span style="color: var(--primary-color); font-weight: bold;">Olá, ${loggedUser}</span>
            <a href="#" id="logout-btn" style="margin-left: 10px; font-size: 0.9em;">(Sair)</a>
        `;

        // Lógica de logout
        document.getElementById('logout-btn').addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('loggedUser'); // Apaga o usuário da sessão
            window.location.reload(); // Recarrega a página para voltar ao estado deslogado
        });
    }
});

//Inicialização

document.addEventListener('DOMContentLoaded', () => {
    const staticCard = gameListContainer.querySelector('.game-card');
    if (staticCard) {
        staticCard.remove();
    }

    renderGameList(gamesData);

    searchInput.addEventListener('input', filterGames);

    setupGenreFilters();

    btnNewPost.addEventListener('click', createNewPost);
});

// --- Lógica do Modal ---
const modal = document.getElementById('game-modal');
const closeModalBtn = document.querySelector('.close-btn');

// Função para abrir o modal com os dados do jogo
function openGameModal(game) {
    document.getElementById('modal-title').textContent = game.title;
    document.getElementById('modal-image').src = game.image;
    document.getElementById('modal-genre').textContent = game.genre.join(', ');
    document.getElementById('modal-keywords').textContent = game.keywords.join(', ');

    // Altera o display para 'flex' para exibir centralizado
    modal.style.display = 'flex';
}

// Fechar o modal ao clicar no botão 'X'
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar o modal ao clicar fora da caixa de conteúdo (no fundo escuro)
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});