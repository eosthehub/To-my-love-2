// Ativa o menu responsivo ao clicar no ícone (hamburger menu)
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Rolagem suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Exibe uma mensagem ao clicar em algum link externo (opcional)
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener("click", () => {
        alert("Você será redirecionado para um site externo.");
    });
});