function processar() {
    const { peso, altura, idade } = pegarDados();
    const IMC = (peso / (altura * altura));
    const fator = CalcularFator(IMC);

    //VALIDAÇÃO IMC
    const resultado = validacao(IMC);
    exibirResultadoIMC(resultado); //EXIBIR RESULTADO IMC

    //VALORES PLANO A
    const valorPlanoBasicoA = [calcularPrecoPlanoBasicoA(idade, IMC).toFixed(2).replace('.', ',')];
    exibirResultadoplanoBasicoA(`R$ ${valorPlanoBasicoA}`); //exibir valores PLANO A

    const valorePlanoStandardA = [calcularPrecoPlanoStandardA(idade, IMC).toFixed(2).replace('.', ',')];
    exibirResultadoplanoStandardA(`R$ ${valorePlanoStandardA}`); //exibir valores PLANO A

    const valoresPlanoPremiumA = [calcularPrecoPlanoPremiumA(idade, IMC).toFixed(2).replace('.', ',')];
    exibirResultadoplanoPremiumA(`R$ ${valoresPlanoPremiumA}`); //exibir valores PLANO A
    //VALORES PLANO B
    const valorPlanoBasicoB = [calcularPrecoPlanoBasicoB(IMC, fator).toFixed(2).replace('.', ',')];
    exibirResultadoplanoBasicoB(`R$ ${valorPlanoBasicoB}`); //exibir valores PLANO B

    const valorePlanoStandardB = [calcularPrecoPlanoStandardB(IMC, fator).toFixed(2).replace('.', ',')];
    exibirResultadoplanoStandardB(`R$ ${valorePlanoStandardB}`); //exibir valores PLANO B

    const valoresPlanoPremiumB = [calcularPrecoPlanoPremiumB(IMC, fator).toFixed(2).replace('.', ',')];
    exibirResultadoplanoPremiumB(`R$ ${valoresPlanoPremiumB}`); //exibir valores PLANO B


    //SUGESTAO PLANO BASICO
    const valorPlanoBasicoAsugest = [calcularPrecoPlanoBasicoA(idade, IMC)];
    const valorPlanoBasicoBsugest = [calcularPrecoPlanoBasicoB(IMC, fator)];
    const sugestaoValorPlanoBasico = Math.min(valorPlanoBasicoAsugest, valorPlanoBasicoBsugest).toFixed(2).replace('.', ',');
    exibirsugestaoplanoBasico(`R$ ${sugestaoValorPlanoBasico}`); //exibir Sugestao valor plano basicp

    //SUGESTAO PLANO BASICO
    const valorPlanoStandardAsugest = [calcularPrecoPlanoStandardA(idade, IMC)];
    const valorPlanoStandardBsugest = [calcularPrecoPlanoStandardB(IMC, fator)];
    const sugestaoValorPlanoStandard = Math.min(valorPlanoStandardAsugest, valorPlanoStandardBsugest).toFixed(2).replace('.', ',');
    exibirsugestaoplanoStandard(`R$ ${sugestaoValorPlanoStandard}`); //exibir Sugestao valor plano standard

    //SUGESTAO PLANO BASICO
    const valorPlanoPremiumAsugest = [calcularPrecoPlanoPremiumA(idade, IMC)];
    const valorPlanoPremiumBsugest = [calcularPrecoPlanoPremiumB(IMC, fator)];
    const sugestaoValorPlanoPremium = Math.min(valorPlanoPremiumAsugest, valorPlanoPremiumBsugest).toFixed(2).replace('.', ',');
    exibirsugestaoplanoPremium(`R$ ${sugestaoValorPlanoPremium}`); //exibir Sugestao valor plano premium
    
    
    const planoBasicoIdeal = [verificaQualPlanoBasico(valorPlanoBasicoAsugest,valorPlanoBasicoBsugest)];
    exibirplanobasicoIdeal(planoBasicoIdeal);

    const planoStandardIdeal = [verificaQualPlanoStandard(valorPlanoStandardAsugest,valorPlanoStandardBsugest)];
    exibirplanoStandardIdeal(planoStandardIdeal);

    const planoPremiumIdeal = [verificaQualPlanoPremium(valorPlanoPremiumAsugest,valorPlanoPremiumBsugest)];
    exibirplanoPremiumIdeal(planoPremiumIdeal);

}


//FUNÇÃO PARA EXIBIR QUAL PLANO
function exibirplanobasicoIdeal(planoBasicoIdeal) {
    document.getElementById('planoBasiscoIdeal').innerHTML = planoBasicoIdeal; //EXIBE PLANO BÁSICO
}
//FUNÇÃO PARA EXIBIR QUAL PLANO
function exibirplanoStandardIdeal(planoStandardIdeal) {
    document.getElementById('planoStandardIdeal').innerHTML = planoStandardIdeal; //EXIBE PLANO BÁSICO
}
//FUNÇÃO PARA EXIBIR QUAL PLANO
function exibirplanoPremiumIdeal(planoPremiumIdeal) {
    document.getElementById('planoPremiumIdeal').innerHTML = planoPremiumIdeal; //EXIBE PLANO BÁSICO
}

//FUNÇÃO PARA QUAL PLANO À SER EXIBIDO
function verificaQualPlanoBasico(valorPlanoBasicoAsugest,valorPlanoBasicoBsugest) {
        if (Math.min(valorPlanoBasicoAsugest, valorPlanoBasicoBsugest) == valorPlanoBasicoAsugest) {
            return "A";
    
        } else if (Math.min(valorPlanoBasicoAsugest, valorPlanoBasicoBsugest) == valorPlanoBasicoBsugest) {
            return "B";
        }

}

//FUNÇÃO PARA QUAL PLANO À SER EXIBIDO
function verificaQualPlanoStandard(valorPlanoStandardAsugest,valorPlanoStandardBsugest) {
    if (Math.min(valorPlanoStandardAsugest, valorPlanoStandardBsugest) == valorPlanoStandardAsugest) {
        return "A";

    } else if (Math.min(valorPlanoStandardAsugest, valorPlanoStandardBsugest) == valorPlanoStandardBsugest) {
        return "B";
    }

}

//FUNÇÃO PARA QUAL PLANO À SER EXIBIDO
function verificaQualPlanoPremium(valorPlanoPremiumAsugest,valorPlanoPremiumBsugest) {
    if (Math.min(valorPlanoPremiumAsugest, valorPlanoPremiumBsugest) == valorPlanoPremiumAsugest) {
        return "A";

    } else if (Math.min(valorPlanoPremiumAsugest, valorPlanoPremiumBsugest) == valorPlanoPremiumBsugest) {
        return "B";
    }

}




//EXIBE RESULTADO IMC
function exibirResultadoIMC(resultado) {
    document.getElementById('calc').innerHTML = resultado; //EXIBE IMC NA TELA
}
//EXIBIR PLANO A
function exibirResultadoplanoBasicoA(valorPlanoBasicoA) {
    document.getElementById('planoBasicoA').innerHTML = valorPlanoBasicoA; //EXIBE PLANO BASICO TELA
}
function exibirResultadoplanoStandardA(valorePlanoStandardA) {
    document.getElementById('planoStandardA').innerHTML = valorePlanoStandardA; //EXIBE PLANO BASICO TELA
}
function exibirResultadoplanoPremiumA(valoresPlanoPremiumA) {
    document.getElementById('planoPremiumA').innerHTML = valoresPlanoPremiumA; //EXIBE PLANO BASICO TELA
}
//EXIBIR PLANO B
function exibirResultadoplanoBasicoB(valorPlanoBasicoB) {
    document.getElementById('planoBasicoB').innerHTML = valorPlanoBasicoB; //EXIBE PLANO BASICO TELA
}
function exibirResultadoplanoStandardB(valorePlanoStandardB) {
    document.getElementById('planoStandardB').innerHTML = valorePlanoStandardB; //EXIBE PLANO STANDARD TELA
}
function exibirResultadoplanoPremiumB(valoresPlanoPremiumB) {
    document.getElementById('planoPremiumB').innerHTML = valoresPlanoPremiumB; //EXIBE PLANO PREMIUM TELA
}
//EXIBE SUGESTÕES DE PLANOS
function exibirsugestaoplanoBasico(sugestaoValorPlanoBasico) {
    document.getElementById('sugestaobasico').innerHTML = sugestaoValorPlanoBasico; //EXIBE IMC NA TELA
}
function exibirsugestaoplanoStandard(sugestaoValorPlanoStandard) {
    document.getElementById('sugestaostandar').innerHTML = sugestaoValorPlanoStandard; //EXIBE IMC NA TELA
}
function exibirsugestaoplanoPremium(sugestaoValorPlanoPremium) {
    document.getElementById('sugestaopremium').innerHTML = sugestaoValorPlanoPremium; //EXIBE IMC NA TELA
}

//Verifica a Classificação
function validacao(IMC) {
    if (IMC < 18.5) {
        return 'Classificação: Baixo peso - Risco de Comorbidade: Baixo';

    } else if (IMC >= 18.5 && IMC < 25) {
        return 'Classificação: Normal - Risco de Comorbidade: Normal';
    } else if (IMC >= 25 && IMC < 30) {
        return 'Classificação: Sobrepeso - Risco de Comorbidade: Aumentado';
    } else if (IMC >= 30 && IMC < 35) {
        return 'Classificação: Obesidade - Risco de Comorbidade: Moderado';
    } else if (IMC >= 35 && IMC < 40) {
        return 'Classificação: Obesidade Mórbida - Risco de Comorbidade: Grave';
    } else if (IMC > 40) {
        return 'Classificação: Obesidade Mórbida - Risco de Comorbidade: Muito Grave';
    } else return "";
}

//calcula plano A
function calcularPrecoPlanoBasicoA(idade, IMC) {
    return 100 + (idade * 10 * (IMC / 10));
}
function calcularPrecoPlanoStandardA(idade, IMC) {
    return (150 + (idade * 15)) * (IMC / 10);
}
function calcularPrecoPlanoPremiumA(idade, IMC) {
    return (200 - (IMC * 10) + (idade * 20)) * (IMC / 10);
}

//CALCULA PLANO B
function calcularPrecoPlanoBasicoB(IMC, fator) {
    return 100 + (fator * 10 * (IMC / 10));
}
function calcularPrecoPlanoStandardB(IMC, fator) {
    return (150 + (fator * 15)) * (IMC / 10);
}
function calcularPrecoPlanoPremiumB(IMC, fator) {
    return (200 - (IMC * 10) + (fator * 20)) * (IMC / 10);
}

//CALCULA IMC
function CalcularFator(IMC) {
    if (IMC < 18.5) {
        return 10;

    } else if (IMC >= 18.5 && IMC < 25) {
        return 1;
    } else if (IMC >= 25 && IMC < 30) {
        return 6;
    } else if (IMC >= 30 && IMC < 35) {
        return 10;
    } else if (IMC >= 35 && IMC < 40) {
        return 20;
    } else if (IMC > 40) {
        return 30;
    } else         return "";
    
}

//PEGAR DADOS
function pegarDados() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const idade = document.getElementById('idade').value;
    return { peso, altura, idade };
}
//Validador de Dados
    const campos = document.querySelectorAll('.required');
    const spans = document.querySelectorAll('.span-required');
    
    function setError(index){
        campos[index].style.border = '2px solid #e63636';
        spans[index].style.display = 'block';
    }
    function removeError(index){
        campos[index].style.border = '';
        spans[index].style.display = 'none';
    }
    
    function idadeValidate(){
        if(campos[0].value <= 0 || campos[0].value >= 120){
            setError(0);
        } else{
            removeError(0);
        }
    }
    function pesoValidate(){
        if(campos[1].value <= 0){
            setError(1);
        } else{
            removeError(1);
        }
    }
    function alturaValidate(){
        if(campos[2].value >= 3 || campos[2].value <= 1){
            setError(2);
        } else{
            removeError(2);
        }
    }

