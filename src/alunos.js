const alunos = ['Henrique', 'Bruna', 'Kaique', 'Marcelo'];

const notas = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        nota: 10
    }    
})

notas.push ({
    nome: 'João',
    nota: 6
})

notas.push ({
    nome: 'Maria',
    nota: 6
})

console.log(notas)

const AlunosNota6 = notas.filter(function(item){
    return item.nota == 6;
})

console.log(AlunosNota6)