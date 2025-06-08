// Função para atualizar o contador de tempo
function atualizarContador() {
    const dataInicial = new Date("2024-07-14T00:00:00");
    const agora = new Date();
    const diferenca = agora - dataInicial;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = 
        `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos juntos!`;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);

// Tentar tocar a música automaticamente, sem remover o botão de play
window.addEventListener("load", function() {
    const audio = document.getElementById("musica");

    // Tentativa de reprodução automática
    audio.play().catch(() => {
        console.log("Reprodução automática bloqueada. O botão de play está visível.");
    });
});
