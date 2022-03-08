document.getElementById('calcula').onclick = calMedia
document.getElementById('limpa').onclick = reseta

function calMedia() {
    var n1 = document.getElementById("nota1").value
    var n2 = document.getElementById("nota2").value
    var n3 = document.getElementById("nota3").value
    var n4 = document.getElementById("nota4").value
    var resultado = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        alert("Digite um valor válido!")
    }

    else if ((n1 > 10 || n1 < 0) || (n2 > 10 || n2 < 0) || (n3 > 10 || n3 < 0) || (n4 > 10 || n4 < 0)) {
        alert("Digite um valor válido entre 0 a 10!")
    }

    else if (n1 === '' || n2 === '' || n3 === '' || n4 === '') {
        alert("Digite o valor das outras notas!")
    }

    if (resultado >= 7) {
        document.getElementById("resul").value = (`Sua média é ${parseFloat(resultado).toFixed(1)}, aluno aprovado!`)
    }

    else if (resultado < 7) {
        document.getElementById("resul").value = (`Sua média é ${parseFloat(resultado).toFixed(1)}, aluno não aprovado!`)
    }
}

function reseta(){
    document.getElementById("nota1").value = ''
    document.getElementById("nota2").value = ''
    document.getElementById("nota3").value = ''
    document.getElementById("nota4").value = ''
    document.getElementById("resul").value = ''
}