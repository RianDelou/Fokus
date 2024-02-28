const html = document.querySelector("html");
const foco = document.querySelector(".app__card-button--foco");
const short = document.querySelector(".app__card-button--curto");
const long = document.querySelector(".app__card-button--longo");
const img = document.querySelector(".app__image");
const title = document.querySelector(".app__title");
const buttonList = document.querySelectorAll(".app__card-button");
const musicButton = document.getElementById("alternar-musica");
const buttonTimer = document.getElementById("start-pause");
const buttonTimerText = document.querySelector("#start-pause span");
const ButtonTimerImg = document.querySelector(".app__card-primary-butto-icon");
const timerPlace = document.getElementById("timer");

const musicaPadrao = new Audio("sons/luna-rise-part-one.mp3");
musicaPadrao.loop = true;
const musicList = [new Audio("sons/play.wav"), new Audio("sons/pause.mp3"), new Audio("sons/beep.mp3")];

let tempo = 1500;
let intervaloValue = null;

function eventoBotao(valor) {
    timerAppear(); //atualiza o tempo

    buttonList.forEach(conteudo => {
        conteudo.classList.remove("active");
    });

    html.setAttribute("data-contexto", valor);
    img.setAttribute("src", `/imagens/${valor}.png`);

    switch (valor) {
        case "foco":

            title.innerHTML = `Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>`;

            foco.classList.add("active");

            break;
        case "descanso-curto":

            title.innerHTML = `Que tal dar uma respirada?<br>
        <strong class="app__title-strong">Faça uma pausa curta!</strong>`;

            short.classList.add("active");

            break;
        case "descanso-longo":

            title.innerHTML = `Hora de voltar à superfície.<br>
        <strong class="app__title-strong">Faça uma pausa longa.</strong>`;

            long.classList.add("active");

        default:
            break;
    }

}
function startOrPauseTimer() {

    if (intervaloValue) { //caso intervaloValue exista, não seja nulo
        zerar();
        musicList[1].play(); //pause
        return;
    } else {
        buttonTimerText.textContent = "Pausar";
        ButtonTimerImg.setAttribute("src", "imagens/pause.png");
        musicList[0].play(); //play START
    }

    intervaloValue = setInterval(() => {
        if (tempo <= 0) {
            zerar();
            musicList[2].play(); //beep beep
            return;
        }
        tempo -= 1;
        timerAppear();
    }, 1000);
}

function zerar() {
    clearInterval(intervaloValue);
    intervaloValue = null;
    buttonTimerText.textContent = "Começar";
    ButtonTimerImg.setAttribute("src", "imagens/play_arrow.png");
}

function timerAppear() {
    const timeData = new Date(tempo * 1000); //o objeto date trabalha apenas com millissegundos
    const tempoFormatado = timeData.toLocaleTimeString("pt-Br", {minute: "2-digit", second: "2-digit"});
    timerPlace.textContent = tempoFormatado;
}

foco.addEventListener("click", () => {
    tempo = 1500; // 25 m
    eventoBotao("foco");
});

short.addEventListener("click", () => {
    tempo = 300; // 5 m
    eventoBotao("descanso-curto");
});

long.addEventListener("click", () => {
    tempo = 900; // 15 m
    eventoBotao("descanso-longo");
});

musicButton.addEventListener("change", () => {
    if (musicButton.checked) {
        musicaPadrao.play();
    } else {
        musicaPadrao.pause();
    }
});

buttonTimer.addEventListener("click", startOrPauseTimer);

timerAppear();