const alunosTurmaA = [
    {
        nome: "Mayke",
        nota: 9.8
    },
    {
        nome: "Diego",
        nota: 10
    },
    {
        nome: "Nicolas",
        nota: 2
    }

]

const alunosTurmaB = [
    {
        nome: "Jose",
        nota: 8
    },
    {
        nome: "Maria",
        nota: 9.5
    },
    {
        nome: "Joao",
        nota: 7
    }

]

    function calculaMedia(alunos) {
        let soma = 0;
        for (let i = 0; i < alunos.length; i++) {
            soma = soma + alunos[i].nota
        }

        const media = soma / alunos.length
        return media
    }
  
    function enviaMensagem(media, turma) {
        if (media > 5) {
            console.log(`A média da turma ${turma} foi ${media}. Parabéns`)
        } else {
            console.log(`A média da turma ${turma} é menor que 5`)
        }
    }

    function marcarComoReprovado(aluno) {
        aluno.reprovado = false
        if(aluno.nota < 5) {
            aluno.reprovado = true
        }
    }

    function enviarMensagemReprovado(aluno){
        if(aluno.reprovado){
            console.log(`O aluno ${aluno.nome} está reprovado!`)
        }
    }

    function alunosReprovados(alunos){
        for (let aluno of alunos){
            marcarComoReprovado(aluno);
            enviarMensagemReprovado(aluno)
        }
    }

    const media1 = calculaMedia(alunosTurmaA)
    const media2 = calculaMedia(alunosTurmaB)

    enviaMensagem(media1, 'TurmaA')
    enviaMensagem(media2, 'TurmaB')

    alunosReprovados(alunosTurmaA)
    alunosReprovados(alunosTurmaB)
