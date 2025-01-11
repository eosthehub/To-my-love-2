// Função para redirecionar os botões
function redirect(url) {
    window.location.href = url;
}

// Área de pesquisa funcional
document.getElementById("search-button").addEventListener("click", function () {
    const query = document.getElementById("search-input").value.toLowerCase().trim();

    // Redirecionamento com palavras-chave
    const keywords = {
                "textos": "https://eosthehub.github.io/To-my-love/Central.html",
    "jogos": "https://eosthehub.github.io/To-my-love/jogos.html",
    "spotify": "https://open.spotify.com/playlist/1bN2og7ffd4otRABJQakPx?si=E0WXqAb6TECegd8VkS3ZQQ&pi=RohRmneIR9qNa",        
    "videos": "https://eosthehub.github.io/To-my-love/animacao.html",    
    "letra": "https://eosthehub.github.io/To-my-love/musica.html",  
    "fotos": "https://eosthehub.github.io/To-my-love/password.html",
    "nudes": "https://eosthehub.github.io/To-my-love/password.html",  
    "buceta": "https://eosthehub.github.io/To-my-love/password.html",
    };

    if (keywords[query]) {
        redirect(keywords[query]);
    } else {
        alert("Nenhum resultado encontrado para sua pesquisa!");
    }
});