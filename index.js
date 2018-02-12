const knex = require("knex")({
    client: 'sqlite3',
    connection: {
      filename: "./contatos.db"
    }
  })
  
  knex("jogador").select().then(ret => {
    console.log(ret[6].nomejogador)
    process.exit(0) // finalizar execução do script
  })