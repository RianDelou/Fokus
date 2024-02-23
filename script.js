const html = document.querySelector("html");
const foco = document.querySelector(".app__card-button--foco");
const short = document.querySelector(".app__card-button--curto");
const long = document.querySelector(".app__card-button--longo");
const img = document.querySelector(".app__image");
const title = document.querySelector(".app__title");

function eventoBotao(valor) {
    html.setAttribute("data-contexto", valor);
    img.setAttribute("src", `/imagens/${valor}.png`);
    switch (valor) {
        case "foco":

            title.innerHTML = `Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>`;

            break;
        case "descanso-curto":

            title.innerHTML = `Que tal dar uma respirada?<br>
        <strong class="app__title-strong">Faça uma pausa curta!</strong>`;

            break;
        case "descanso-longo":

            title.innerHTML = `Hora de voltar à superfície.<br>
        <strong class="app__title-strong">Faça uma pausa longa.</strong>`;

        default:
            break;
    }
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





