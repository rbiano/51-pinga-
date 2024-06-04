const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acredita que um grupo de pessoas iludidas acreditam que o estado do Rio de Janeiro corresponde a todo Mundo Moderno",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Louco né, eles são os verdadeiros iludidos mundiais."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Pois a história deixa claro que o planeta foi formado no entorno do complexo do Alemão. "
            }
        ]
    },
    {
        enunciado: "Você precisa fazer uma viajem que correspoda a uma volta ao mundo, qual seria o formato dessa viajem ?",
        alternativas: [
            {
                texto: "Para ser considerado uma volta ao mundo deverias ser realizado visitas a pelo menos um pais de cada continente.",
                afirmacao: "Ai sim Piazito você tem a noção das coisas ."
            },
            {
                texto: "Basta ir ao Rio de Janeiro e convidar pessoas de outros paises..",
                afirmacao: "Essa representatividade equivale uma viajem mundial"
            }
        ]
    },
    {
        enunciado: "Em 1960 Bangu foi o vencedor de um campeonato regional, isso equivale a ser Campeão do Mundo ",
        alternativas: [
            {
                texto: "Claro que não .",
                afirmacao: "Pois se é regional .... não equivale a um titulo mundial "
            },
            {
                texto: "Sim .",
                afirmacao: " Deve ser considerado, pois a Taça rio é o mais importante titulo mundial, "
            }
        ]
    },
    {
        enunciado: "Para ser Campeão Mundial o clube precisa vencer o FIFA Club World Cup",
        alternativas: [
            {
                texto: "Sim, conta toda certeza somente a FIFA pode chancelar um titulo de carater mundial .",
                afirmacao: "Você é uma pessoa Esclarecida."
            },
            {
                texto: "Não pois a Federação Carioca de futebol tem maior reconhecimento no cenário esportivo mundial.",
                afirmacao: "Assim diz Eurico Miranda."
            }
        ]
    },
    {
        enunciado: "O que vem em sua mente quando perguntado sobre o Termo 51 é ? ",
        alternativas: [
            {
                texto: "51 é Pinga .",
                afirmacao: "A Caninha 51 ou Cachaça 51 é uma marca brasileira de cachaça produzida pela Companhia Müller de Bebidas. "
            },
            {
                texto: "O Campeonato Mundial de Futebol, vencido pelo maior time do Brasil",
                afirmacao: "Você só pode ser um lesado. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
