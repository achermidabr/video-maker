document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen')
    const context = screen.getContext('2d')
    const defaultW = 4
    const defaultH = 4

    const ponto = {
        'color': 'green',
        'x': 0,
        'y': 0
    }

    //Vamos desenhar as linhas do meio
    drawStartLines()
    function drawStartLines(){
        context.lineWidth = 1
        context.strokeStyle = 'lightgray'
        context.moveTo(0,200)
        context.lineTo(400,200)
        context.stroke()
        
        context.moveTo(200,0)
        context.lineTo(200,400)
        context.stroke()
    }

    btnLimpar = document.getElementById('btnLimpar');
    btnLimpar.addEventListener('click',function () {
        context.fillStyle = 'white'
        context.fillRect(0,0,400,400)
        drawStartLines()
    })

    function printPoint(ponto){
        context.fillStyle = ponto.color
        context.fillRect(ponto.x - (defaultW/2),ponto.y - ((defaultH/2)),defaultW,defaultH)
        context.fillStyle = 'black'
        context.fillText('('+ ponto.x +','+(screen.height - ponto.y)+')',ponto.x+defaultW,ponto.y+(defaultH/2))    
        console.log('('+ ponto.x +','+(screen.height - ponto.y)+')')
    }

    screen.onmousedown = (evento) => {
        ponto.x = evento.clientX - 12
        ponto.y = evento.clientY - 12
        printPoint(ponto)
        console.log(ponto)
    }

    btnMostrar = document.getElementById('btnMostrar');
    btnMostrar.addEventListener('click',function () {
        const color = document.getElementById('inputcolor').value
        x = document.getElementById('inputx').value
        y = document.getElementById('inputy').value
        ponto.color = color
        ponto.x = parseInt(x)
        ponto.y = 400 - parseInt(y)
        printPoint(ponto)
    })


})