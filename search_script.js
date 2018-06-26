const settings = require("./settings");

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

const firstName = process.argv[2];

knex.from('famous_people').select('first_name', 'last_name', 'birthdate').where('first_name', firstName).asCallback((err, res) => {
  // console.log('got these results:', res[0]);
  for(item in res)
    console.log(res[item].first_name + " " + res[item].last_name + " " + res[item].birthdate + " ");
});





