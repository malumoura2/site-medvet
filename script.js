const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativa = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoReultado = document.querySelector(".texto-resultado");

const perguntas=[
    {
        enunciado: "Pode dar banho com produtos humanos?"
        ,alternativas:[
            {
                texto:"Sim, pois é indicado.",
                afirmacao:"Respota poitiva, pois é inicado e não causa problemas de pele.",

            }

            ,{
                texto: "Não, é contra indicado.",
                afirmacao:"Resposta poitiva, pois é contra indicado e poe causar problemas de pele.",

            }
        ]

        [
            {
                
        enunciado: "È necessário tampar o ouvido do pet na hora do banho?"
        ,alternativas:[
            {
                texto:"Sim, é necessário.",
                afirmacao:"Respota poitiva, é necessário pois eles não secam sozinho e pode causar doença.",

            }

            ,{
                texto: "Não é necessário.",
                afirmacao:"Resposta poitiva, não é necessário pois eles conguem secar sozinho e não tem perigo.",

            }
        ]
            }
        ]

        [
            {
                
        enunciado: "Todos os pets precisam de banho?"
        ,alternativas:[
            {
                texto:"Sim, precisam.",
                afirmacao:"Respota poitiva, todos o pet preciam de banho porque muitos não se limpam sozinhos.",

            }

            ,{
                texto: "Não precisam.",
                afirmacao:"Resposta poitiva, não preciam porque muitos se limpam sozinhos e não necesitam de banho.",

            }
        ]
            }
        ]
    }
]
