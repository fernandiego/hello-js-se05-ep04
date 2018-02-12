const knex = require("knex")({
    client: 'sqlite3',
    connection: {
        filename: "./contatos.db"
    }
})

//SELECT        EX: node indexTarefa.js select
//Output: Seleciona a tabela de contatos
if (process.argv[2] == "select") {
    knex("contato").select().then(ret => {
        console.log(ret)
        process.exit(0) // finalizar execução do script
    })
}

//INSERT        EX: node indexTarefa.js insert teste 12345      
//Output: Contato de nome = teste e telefone = 12345 é inserido no banco
else if (process.argv[2] == "insert") {

    nomecontato = process.argv[3]
    telefonecontato = process.argv[4]

    let infocontato = { nomecontato, telefonecontato }


    knex("contato").insert(infocontato, "idcontato").then(ret => {
        console.log(`Contato ${nomecontato} inserido na posição ${ret[0]}`)
        process.exit(0) // finalizar execução do script
    })
}

//UPDATE        EX: node indexTarefa.js update 2 berynice     
//Output: Nome do contato de id = 2 é alterado para berynice
else if (process.argv[2] == "update") {

    const idcontato = process.argv[3]
    const nomecontato = process.argv[4]


    knex("contato").update({ nomecontato }, "nomecontato").where({ idcontato }, "idcontato").then(ret => {
        console.log(`Nome do contato de Id: ${idcontato} atualizado para ${nomecontato}`)
        process.exit(0)
    })

}

//DELETE        EX: node indexTarefa.js delete 2      
//Output: contato de id = 2 é eliminado do banco
else if (process.argv[2] == "delete") {

    const idcontato = process.argv[3]

    knex("contato").del().where({ idcontato }).then(ret => {
        console.log(`contato de Id ${idcontato} eliminado`)
        process.exit(0)
    })
}
