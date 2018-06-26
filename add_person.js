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
const lastName = process.argv[3];
const dateOfBirth = process.argv[4];
const string = {first_name: firstName, last_name: lastName, birthdate: dateOfBirth};

knex.insert(string).into("famous_people").then(function (id){
console.log(id)
})


