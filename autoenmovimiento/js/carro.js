var fondo = document.querySelector('.container')
var llanta = document.querySelector('.llanta1')
var llantaa = document.querySelector('.llanta2')
var luces = document.querySelector('.luces')
var polvo = document.querySelector('.polvo')


fondo.addEventListener('click', fondoAnimado)

function fondoAnimado(){
    fondo.classList.add('fondoAnimado')
    llanta.classList.add('llanta1Animada')
    llantaa.classList.add('llanta2Animada')
    luces.classList.add('lucesAnimada')
    polvo.classList.add('polvoAnimado')
    luces.classList.remove('oculto')
    polvo.classList.remove('oculto')

}

