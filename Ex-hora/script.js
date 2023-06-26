function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    

   
    
    if(hora >= 0 && hora < 12){
        img.src = "../imag/manhã.png"
        msg.innerHTML = `Bom dia, agora são ${hora} Horas`
        document.body.style.background = "#bdd7ff"

    }else if(hora >= 12 && hora < 18){
        img.src = "../imag/tarde.png"
        msg.innerHTML = `Boa tarde, agora são ${hora} Horas`
        document.body.style.background = "#ffbc85"
    }else {
        img.src = "../imag/noite.png"
        msg.innerHTML = `Boa noite, agora são ${hora} Horas`
        document.body.style.background = "#7c533c"
    }

}