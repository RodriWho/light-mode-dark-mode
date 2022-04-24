function changeMode() {
    changeClass()
    changeText()   
}

function changeClass() {
    caixa.classList.toggle(darkModeClass);
    botao.classList.toggle(darkModeClass);
}

function changeText() {
    const darkMode = "Dark Mode"
    const lightMode = "Light Mode"

    if(caixa.classList.contains(darkModeClass)){
        botao.innerHTML = lightMode
        titulo.innerHTML = darkMode
        paragrafo.innerHTML = darkMode + " ON"
    } else {
        botao.innerHTML = darkMode
        titulo.innerHTML = lightMode
        paragrafo.innerHTML = lightMode + " ON"
    }

}

const botao = document.getElementById("botao");
const titulo = document.getElementById("titulo");
const caixa = document.getElementById("caixa");
const paragrafo = document.getElementById("paragrafo");
const darkModeClass = "dark-mode";


botao.addEventListener('click', changeMode)