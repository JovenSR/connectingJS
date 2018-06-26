const firstName = process.argv.slice(2);
const pg = require("pg");
const settings = require("./settings"); // settings.json


const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});


const text = "SELECT first_name, last_name, birthdate FROM famous_people WHERE first_name = $1"

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(text, firstName, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    for(item in result.rows)
    console.log(result.rows[item].first_name + " " + result.rows[item].last_name + " Born on " + result.rows[item].birthdate + " "); //output: 1
    client.end();
  });
});