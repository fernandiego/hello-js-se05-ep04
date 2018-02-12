const knex = require("knex")({
    client: 'sqlite3',
    connection: {
      filename: "./contatos.db"
    }
  })
  
  let nomejogador = "Pascal"
  let numerojogador = 11
  
  let jogador = {nomejogador, numerojogador}
  
  knex("jogador").insert(jogador,"idjogador").then(ret => {
    console.log(ret)
    process.exit(0) // finalizar execução do script
  })