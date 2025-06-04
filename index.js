
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
var ListaCavalos = []
var ListaNomeCavalos = [];

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
            Volta: null,
            TotalAcumulado: null
        }
        if (ListaCavalos.length < qtdCavalos) {
            ListaCavalos.push(cavalo)
            ListaNomeCavalos.push(ipt_nomeCavalo);
            console.log(ListaCavalos)
            for (var i = 0; i <= ListaNomeCavalos.length - 1; i++) {
                containerExibirNomes.innerHTML += `<br>O cavalo ${i + 1} tem o nome: ${ListaNomeCavalos[i]}`
            }
        } else {
            containerIptTamanhoTurfe.classList.remove('d-none')
            containerIptTamanhoTurfe.classList.add('d-flex')
            containerIptNomeCavalo.classList.add('d-none')
            containerIptNomeCavalo.classList.remove('d-flex')
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
        containerIptTamanhoTurfe.classList.remove('d-none')
        containerIptTamanhoTurfe.classList.add('d-flex')
        containerIptNomeCavalo.classList.add('d-none')
        containerIptNomeCavalo.classList.remove('d-flex')
    }
}