// Lista de palavras-chave e links
const keywords = {
    "textos": "https://eosthehub.github.io/To-my-love/Central.html",
    "jogos": "https://eosthehub.github.io/To-my-love/jogos.html",
    "spotify": "https://open.spotify.com/playlist/1bN2og7ffd4otRABJQakPx?si=E0WXqAb6TECegd8VkS3ZQQ&pi=RohRmneIR9qNa",
};

// Lógica de pesquisa
document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const query = document.getElementById("search-input").value.toLowerCase();

    if (keywords[query]) {
        window.location.href = keywords[query];
    } else {
        alert("Nenhum resultado encontrado para: " + query);
    }
});