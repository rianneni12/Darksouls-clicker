var Almas = 0;
var up1 = 1;

function diminuirTamanho() {
    var imagem = document.getElementById('cinder');
    imagem.style.transform = 'scale(0.9)';
    setTimeout(function() {
        imagem.style.transform = 'scale(1)';
    }, 100); 
    Almas = Almas + up1;
    document.getElementById('contador').innerHTML = "Almas " + Almas;
    finalizarjogo();
}
function upgrade1(ValorBaseUpgrade){
    if (Almas >= 10) {
        Almas = Almas - 10;
        up1 = up1 + ValorBaseUpgrade;
        document.getElementById('contador').innerHTML = "Almas " + Almas;
        document.getElementById('poder').innerHTML = "ALMAS RECEBIDAS POR CLIQUE:  " + up1;
    }
}
function upgrade2(ValorBaseUpgrade2){
    if(Almas >= 50){
        Almas = Almas - 50;
        up1 = up1 + ValorBaseUpgrade2
        document.getElementById('contador').innerHTML = "Almas " + Almas;
        document.getElementById('poder').innerHTML = "ALMAS RECEBIDAS POR CLIQUE:  " + up1;
    }
}
function upgrade3(ValorBaseUpgrade3){
    if(Almas >= 100){
        Almas = Almas - 100;
        up1 = up1 + ValorBaseUpgrade3
        document.getElementById('contador').innerHTML = "Almas " + Almas;
        document.getElementById('poder').innerHTML = "ALMAS RECEBIDAS POR CLIQUE:  " + up1;
    }
}
function finalizarjogo(){
    if(Almas >= 500){
        alert("Você coletou o máximo de almas")
        location.reload();
    }
}


