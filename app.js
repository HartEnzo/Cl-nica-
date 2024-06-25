let clinica = [];
let consulta;
let opcao;

console.log("Deseja marcar uma consulta? Se sim, digite 'Marcar': ");

process.stdin.on("data", function(data) {
    let entrada = data.toString().trim();

    if (!opcao) {
        opcao = entrada;

        if (opcao === "listar") {
            console.log("Lista de pacientes:");
            clinica.forEach(consulta => {
                console.log(`Nome: ${consulta.nome}, Médico: ${consulta.medico}, Data: ${consulta.data}, Hora: ${consulta.hora}`);
            });
            opcao = undefined;
            console.log("Deseja marcar outra consulta? Se sim, digite 'Marcar', se não, digite 'Cancelar':");
        } else if (opcao === "Marcar") {
            consulta = {};
            console.log("Nome do paciente:");
        } else if (opcao === "Cancelar") {
            consulta = undefined;
            console.log("Operação de marcação de consulta cancelada.");
            opcao = undefined;
        }
    } else {
        if (opcao === "Marcar") {
            if (!consulta.nome) {
                consulta.nome = entrada;
                console.log("Nome do Médico:");
            } else if (!consulta.medico) {
                consulta.medico = entrada;
                console.log("Dia da consulta:");
            } else if (!consulta.data) {
                consulta.data = entrada;
                console.log("Hora marcada para a consulta:");
            } else if (!consulta.hora) {
                consulta.hora = entrada;
                clinica.push(consulta);
                consulta = undefined;
                console.log("Consulta marcada com sucesso e adicionada à lista!");
                opcao = undefined;
                console.log("Deseja marcar outra consulta? Se sim, digite 'Marcar', se não, digite 'Cancelar':");
            }
        }
    }
});