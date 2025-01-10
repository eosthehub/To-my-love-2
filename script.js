// Lista de palavras-chave e os sites correspondentes
const keywords = {
        "textos": "https://eosthehub.github.io/To-my-love/Central.html",
    "jogos": "https://eosthehub.github.io/To-my-love/jogos.html",
    "spotify": "https://open.spotify.com/playlist/1bN2og7ffd4otRABJQakPx?si=E0WXqAb6TECegd8VkS3ZQQ&pi=RohRmneIR9qNa",
};

// Função para lidar com a submissão do formulário
document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    const query = document.getElementById("search-input").value.toLowerCase().trim(); // Obtém a pesquisa

    // Verifica se a palavra-chave existe no objeto
    if (keywords[query]) {
        window.location.href = keywords[query]; // Redireciona para o site correspondente
    } else {
        alert("Nenhum resultado encontrado para: " + query); // Alerta caso não encontre a palavra-chave
    }
});