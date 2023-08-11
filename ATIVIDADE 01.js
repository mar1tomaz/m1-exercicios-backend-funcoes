function corrigirProva(prova) {
    let acertou = 0;

    for (const questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            acertou++;
        }
    }

    console.log(`O aluno(a) ${prova.aluno} acertou ${acertou} questões e obteve nota ${acertou * 2}.`);
}
const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};
corrigirProva(prova);

