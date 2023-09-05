function Pessoa(nome) {
    this.nome = nome;
    this.dizOla = function() {
        console.log("Olá " + this.nome);
    }
}

function Analista(nome, cargo, salario) {
    this.cargo = cargo;
    
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if(typeof valor === 'number') {
            _salario = valor;
        }
        
    }

    this.participacao = function() {
        const valorParticipacao = _salario * 0.5;
        _salario = valorParticipacao;
    }

    this.dizCargo = function() {
            console.log(this.cargo);
        }

    Pessoa.call(this, nome);
}

function Coordenador(nome) {
    Analista.call(this, nome, "Coordenador", 7000);

    this.participacao = function() {
        const valorParticipacao = this.getSalario() * 1.5;
        this.setSalario(valorParticipacao);
    }
}

function Gerente(nome) {
    Analista.call(this, nome, "Gerente", 10000);

    this.participacao = function() {
        const valorParticipacao = this.getSalario() * 2;
        this.setSalario(valorParticipacao);
    }
}

const funcionario1 = new Analista("Pedro", "Analista", 2500);
const funcionario2 = new Coordenador("Maria");
const funcionario3 = new Gerente("Carlos");



funcionario1.participacao();
console.log(funcionario1.getSalario());
console.log(funcionario1.cargo);
console.log(funcionario1.nome);



funcionario2.participacao();
console.log(funcionario2.getSalario());
console.log(funcionario2.cargo);
console.log(funcionario2.nome);


funcionario3.participacao();
console.log(funcionario3.getSalario());
console.log(funcionario3.cargo);
console.log(funcionario3.nome);