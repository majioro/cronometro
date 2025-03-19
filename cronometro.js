document.addEventListener("DOMContentLoaded", function() {
    console.log("Iniciando cronômetro regressivo de 10 minutos...");

    let timeLeft = 10 * 60; // 10 minutos em segundos
    let display = document.getElementById("demo"); // O ID onde será mostrado

    if (!display) {
        console.error("Elemento #demo não encontrado!");
        return;
    }

    function updateTimer() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        display.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            display.innerHTML = "EXPIRED";
            console.log("Cronômetro finalizado.");
        } else {
            timeLeft--;
        }
    }

    updateTimer();
    const countdown = setInterval(updateTimer, 1000);
    console.log("Cronômetro iniciado!");
});