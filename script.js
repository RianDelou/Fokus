const html = document.querySelector("html");
const foco = document.querySelector(".app__card-button--foco");
const short = document.querySelector(".app__card-button--curto");
const long = document.querySelector(".app__card-button--longo");
const img = document.querySelector(".app__image");
const title = document.querySelector(".app__title");
const buttonList =  document.querySelectorAll(".app__card-button");
const musicButton = document.getElementById("alternar-musica");
const musica = new Audio("sons/luna-rise-part-one.mp3");
musica.loop = true;
const startTimer = document.getElementById("start-pause");

let tempo = 5;
let intervalo = null;

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

function decrementoTempo() {
    if (tempo <= 0) {
        zerar();
        console.log("cabo");
        return;
    }

    tempo -= 1;
    console.log(tempo);
}

function timerInitOrPause() {
    if (intervalo) {
        zerar();
        return;
    }
    intervalo = setInterval(decrementoTempo, 1000); // recebe em milissegundos
}

function zerar() {
    clearInterval(intervalo);
    intervalo = null;
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
    console.dir(musicButton)
    if (musicButton.checked) {
        musica.play();
    } else {
        musica.pause();
    }
});

startTimer.addEventListener("click", timerInitOrPause);


