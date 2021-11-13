function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    if (minuto < 10) {
        minuto = "0" + minuto
    }

    msg.innerHTML = `Agora são ${hora}:${minuto} horas .`

    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'Manha.png'
        document.body.style.background = '#e0af66'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde!
        img.src = 'Tarde.png'
        document.body.style.background = '#e97716'
    } else {
        //Boa noite!
        img.src = 'Noite.png'
        document.body.style.background = '#0c1719'
    }

}
