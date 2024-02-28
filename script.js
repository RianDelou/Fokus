const html = document.querySelector("html");
const foco = document.querySelector(".app__card-button--foco");
const short = document.querySelector(".app__card-button--curto");
const long = document.querySelector(".app__card-button--longo");
const img = document.querySelector(".app__image");
const title = document.querySelector(".app__title");
const buttonList = document.querySelectorAll(".app__card-button");
const musicButton = document.getElementById("alternar-musica");
const musicaPadrao = new Audio("sons/luna-rise-part-one.mp3");
musicaPadrao.loop = true;
const buttonStartOrPauseTimer = document.getElementById("start-pause");
const musicList = [new Audio("sons/play.wav"), new Audio("sons/pause.mp3"), new Audio("sons/beep.mp3")];

let tempo = 5;
let intervaloValue = null;

function eventoBotao(valor) {

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
        clearInterval(intervaloValue);
        intervaloValue = null;

        musicList[1].play(); //pause
        return;
    } else {
        musicList[0].play(); //play
    }

    intervaloValue = setInterval(() => {
        if (tempo <= 0) {
            clearInterval(intervaloValue);
            console.log("temporizador finalizado");
            musicList[2].play(); //beep beep
            return;
        }
        console.log(tempo);
        tempo -= 1;
    }, 1000);
}

foco.addEventListener("click", () => {
    eventoBotao("foco");
});

short.addEventListener("click", () => {
    eventoBotao("descanso-curto");
});

long.addEventListener("click", () => {
    eventoBotao("descanso-longo");
});

musicButton.addEventListener("change", () => {
    if (musicButton.checked) {
        musicaPadrao.play();
    } else {
        musicaPadrao.pause();
    }
});

buttonStartOrPauseTimer.addEventListener("click", startOrPauseTimer);
