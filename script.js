const period = document.getElementById('periodo')
const mensagem = document.getElementById('mensagem')
const imagem = document.getElementById('imagem')
const botao = document.getElementById('atualizar')

function atualizarDashboard() {
    const agora = new Date()
    const hora = agora.getHours()

    if (hora >= 6 && hora < 12) {
        periodo.textContent = 'Bom Dia!'
        mensagem.textContent = 'bora levantar!'
        imagem.src = 'imagens/morning.png'
        document.body.style.background = 'linear-gradient(180deg, #fff7d6, #ffe08a)'

    } else if (hora >= 12 && hora < 18) {
        periodo.textContent = 'Boa tarde!'
        mensagem.textContent = 'bora produzir!'
        imagem.src = 'imagens/afternoon.png'
        document.body.style.background = 'linear-gradient(180deg, #e6f0ff, #b3d1ff)'
    
    } else { 
            periodo.textContent = 'Boa noite!'
            mensagem.textContent = 'bora dormir!'
            imagem.src = 'imagens/night.png'
            document.body.style.background = 'linear-gradient(180deg, #1c1c3c, #000018)'
    }

}

atualizarDashboard()

console.log(botao)
botao.addEventListener("click", atualizarDashboard)