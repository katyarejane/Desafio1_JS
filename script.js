let escola = "true";

if(escola) {
    console.log("Vou estudar");
}
else{
    console.log("Vou dormir");
}

// for(inicialização, condição, iteração)

for(let i = 0; i <= 20; i += 2) {
    console.log(i);
}

// Crie uma função que exiba uma mensagem no console

function exibirMensagem() {
    console.log("Mensagem");
}
exibirMensagem();

// Crie uma função que receba dois parâmetros, o nome e o sobrenome e exiba no console o nome completo

function exibirNomeCompleto(nome, sobrenome, idade) {
    console.log(nome + sobrenome + idade);
}
exibirNomeCompleto("Katia", "Rejane", 37);
