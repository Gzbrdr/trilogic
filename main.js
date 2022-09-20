const drag = document.querySelector('div.dragElement')
console.log(drag);
drag.style.left = '0px'
drag.style.top = '0px'

let xAtual
let yAtual
let naHoraDoClickX
let naHoraDoClickY
let dragTarget

function styleLeft(element) {
    const left = element.style.left
    return parseInt(left.replace('px'))
}

function styleTop(element) {
    const top = element.style.top
    return parseInt(top.replace('px'))
}

function arrasta({pageX, pageY}) {
    const xFinal = pageX - xAtual 
    const yFinal = pageY - yAtual
    const newX = naHoraDoClickX + xFinal + 'px'
    const newY = naHoraDoClickY + yFinal + 'px'
    console.log(newX);
    console.log(newY);
    dragTarget.style.left = newX
    dragTarget.style.top = newY
}

document.addEventListener('mousedown', ({ target, pageX, pageY }) => {
    dragTarget = target
    xAtual = pageX 
    yAtual = pageY
    naHoraDoClickX = styleLeft(dragTarget)
    naHoraDoClickY = styleTop(dragTarget)
    document.addEventListener('mousemove', arrasta)
})

document.addEventListener('mouseup', () => {
    naHoraDoClickX = styleLeft(dragTarget)
    naHoraDoClickY = styleTop(dragTarget)
    document.removeEventListener('mousemove', arrasta)
})