
function InicialComecar() {
    var containerInicial = document.getElementById('containerInicial')
    var containerDadosCavalo = document.getElementById('containerDadosCavalo')

    containerInicial.classList.add('d-none')
    containerInicial.classList.remove('d-flex')
    containerDadosCavalo.classList.add('d-flex')
    containerDadosCavalo.classList.remove('d-none')
}
var qtdCavalos = 0;
var tamanhoTurfe = 0;
var containerIptQtdCavalo = document.getElementById('containerIptQtdCavalo')
var containerIptNomeCavalo = document.getElementById('containerIptNomeCavalo')
var containerIptTamanhoTurfe = document.getElementById('containerIptTamanhoTurfe')
var containerIptDuranteTurfe = document.getElementById('containerIptDuranteTurfe')
var ListaCavalos = []
var ListaNomeCavalos = [];
var ListaPodium = [];

function QtdCavalosContinuar() {
    var ipt_qtdCavalos = Number(document.getElementById('ipt_qtdCavalos').value);

    if (ipt_qtdCavalos >= 2 && ipt_qtdCavalos <= 6) {
        qtdCavalos = ipt_qtdCavalos
        alert('Quantidade de cavalos definida')
        containerIptQtdCavalo.classList.remove('d-flex')
        containerIptQtdCavalo.classList.add('d-none')
        containerIptNomeCavalo.classList.add('d-flex')
        containerIptNomeCavalo.classList.remove('d-none')
    }
    else {
        alert('Insira um valor válido entre 2 e 6')
    }
}

function CadastrarNome() {
    var ipt_nomeCavalo = document.getElementById('ipt_nomeCavalo').value;
    containerExibirNomes.innerHTML = '';
    if (ipt_nomeCavalo != '') {
        var cavalo = {
            Nome: ipt_nomeCavalo,
            Volta: 0,
            TotalAcumulado: 0
        }
        if (ListaCavalos.length < qtdCavalos) {
            ListaCavalos.push(cavalo)
            ListaNomeCavalos.push(ipt_nomeCavalo);
            console.log(ListaCavalos)
            for (var i = 0; i <= ListaNomeCavalos.length - 1; i++) {
                containerExibirNomes.innerHTML += `<br>O cavalo ${i + 1} tem o nome: ${ListaNomeCavalos[i]}`
            }
            if (ListaCavalos.length == qtdCavalos) {
                containerIptTamanhoTurfe.classList.remove('d-none')
                containerIptTamanhoTurfe.classList.add('d-flex')
                containerIptNomeCavalo.classList.add('d-none')
                containerIptNomeCavalo.classList.remove('d-flex')
            }
        }
    }
}



function definirVolta() {
    if (ipt_tamanhoTurfe.value < 5 || ipt_tamanhoTurfe.value > 10) {
        alert('A quantidade de voltas tem que estar entre 5 e 10')
    }
    else {
        tamanhoTurfe = 0;
        tamanhoTurfe = ipt_tamanhoTurfe.value;
        console.log(ListaCavalos)
        containerIptTamanhoTurfe.classList.remove('d-flex')
        containerIptTamanhoTurfe.classList.add('d-none')
        containerIptDuranteTurfe.classList.add('d-flex')
        containerIptDuranteTurfe.classList.remove('d-none')
    }
}


var voltaAtual = 0;
var containerCorrida = document.getElementById('containerCorrida')
var containerPodium = document.getElementById('containerPodium')

function IniciarVolta() {
    if (voltaAtual <= tamanhoTurfe) {
        containerCorrida.innerHTML += `
                <hr>
                <h3><b>Volta ${voltaAtual + 1}</b></h3><br><br></br>`
        for (let i = 0; i < qtdCavalos; i++) {
            var tempoVolta = Number((Math.random() * (9 - 7) + 7).toFixed(1));
            ListaCavalos[i].Volta = tempoVolta;
            ListaCavalos[i].TotalAcumulado = Number((ListaCavalos[i].TotalAcumulado + tempoVolta).toFixed(1));
            containerCorrida.innerHTML += `
                <span>${ListaCavalos[i].Nome} - ${ListaCavalos[i].Volta} - ${ListaCavalos[i].TotalAcumulado}<br></span>
            `
        }
        voltaAtual++;
        console.log(voltaAtual)
        if (voltaAtual == tamanhoTurfe) {
            for (let i = 0; i < ListaCavalos.length; i++) {
                ListaPodium.push(ListaCavalos[i].TotalAcumulado);
            }
            console.table(ListaPodium)
            var aux = 0;
            for (let i = 0; i < ListaPodium.length; i++) {
                for (let j = 0; j < ListaPodium.length; j++) {
                    if (ListaPodium[i] < ListaPodium[j]) {
                        aux = ListaPodium[i];
                        ListaPodium[i] = ListaPodium[j];
                        ListaPodium[j] = aux;
                    }
                }
            }

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < ListaCavalos.length; j++) {
                    if (ListaPodium[i] == ListaCavalos[j].TotalAcumulado) {
                        alert('entrou')
                        containerPodium.innerHTML += `<span><b>Em ${i + 1}º lugar - ${ListaCavalos[j].Nome}</b></span><br>`
                    }
                }


            }
            console.table(ListaPodium);
        }
    }
}