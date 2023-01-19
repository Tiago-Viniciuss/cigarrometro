function calcular() {
    var temp = document.getElementById('txt1')
    var quant = document.getElementById('txt2')
    var tempo = Number(temp.value)
    var quantidade = Number(quant.value)
    if (tempo == 0) {
        window.alert('Digite um valor válido!')
    } else if ( quantidade == 0 ) {
        window.alert('Digite uma quantidade válida!')
    }
    var resultado = document.getElementById('resul')
    var totalcigar = quantidade*(tempo*365)
    var dias = ((totalcigar*11)/60)/24
    resultado.innerHTML = `<p>Durantes estes ${tempo} anos, você já fumou ${totalcigar} cigarros <br> e estima-se que você já perdeu ${dias.toFixed(0)} dias de vida.</p>`

}