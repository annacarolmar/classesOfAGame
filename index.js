// Importa a biblioteca prompt-sync para capturar entradas do usuário
const prompt = require('prompt-sync')({ sigint: true }); // Configura para aceitar interrupções (Ctrl+C)

// Definindo a classe Heroi
class Heroi {
constructor(nome, idade, tipo) {
    /**
     * Inicializa o herói com nome, idade e tipo.
     */
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
}

atacar() {
    /**
     * Exibe uma mensagem descrevendo o ataque baseado no tipo do herói.
     */
    let ataque;

    switch (this.tipo.toLowerCase()) {
    case "mago":
        ataque = "magia";
        break;
    case "guerreiro":
        ataque = "sua espada";
        break;
    case "monge":
        ataque = "artes marciais";
        break;
    case "ninja":
        ataque = "sua shuriken";
        break;
    default:
        ataque = "realizou um ataque indefinido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}.`);
}
}

// Função principal
function main() {
console.log("Bem-vindo ao jogo de heróis!");

const nome = prompt("Digite o nome do herói: ");
const idade = parseInt(prompt("Digite a idade do herói: "), 10);
const tipo = prompt("Digite o tipo do herói (mago, guerreiro, monge, ninja): ");

  // Validações simples para evitar problemas
if (!nome || isNaN(idade) || !tipo) {
    console.log("Por favor, insira todos os campos corretamente!");
    return;
}

const heroi = new Heroi(nome, idade, tipo);
console.log(`Herói criado: Nome = ${heroi.nome}, Idade = ${heroi.idade}, Tipo = ${heroi.tipo}`);

heroi.atacar();
}

// Executa o jogo
main();
