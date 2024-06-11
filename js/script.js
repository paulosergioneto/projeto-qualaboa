// Exemplo de interatividade (clique no evento)
document.querySelectorAll('.event').forEach(item => {
    item.addEventListener('click', () => {
        // Ação ao clicar no evento (pode ser personalizada)
        alert('Evento clicado!');
    });
});
