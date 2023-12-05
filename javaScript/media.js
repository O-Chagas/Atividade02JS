function calcular() {
    const num1 = parseFloat(document.formMedia.num1.value);
    const num2 = parseFloat(document.formMedia.num2.value);    
    let resultado;
    let situacao;

    resultado = parseFloat((num1 + num2) / 2);

    if (resultado < 5) {
        situacao = 'Reprovado';
    }

    else if (resultado < 8) {
        situacao = 'Aprovado';
    }

    else {
        situacao = 'Aprovado com Destaque';
    }

    const caixaResultado = document.getElementById('resultado');
    caixaResultado.value = resultado;
    const caixaSituacao = document.getElementById('situacao');
    caixaSituacao.value = situacao;
}
