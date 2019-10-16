

/*
const pg = require('pg');
const dotenv = require('dotenv') //like YAMLs but better


dotenv.config()
*/

  const pg = require('pg');




//Block for adding js to navigation buttons
document.getElementById("home").addEventListener("click", function() {showHome()}, false);
document.getElementById("tokidex").addEventListener("click", function() {showTokidex()}, false);
document.getElementById("add").addEventListener("click", function() {showAdd()}, false);
document.getElementById("edit").addEventListener("click", function() {showEdit()}, false);
document.getElementById("trainers").addEventListener("click", function() {showTrainers()}, false);
//Is there a better way to do this?

const col = ['id', 'name', 'weight', 'height', 'fly', 'fight', 'fire', 'water', 'elec', 'ice', 'total', 'trainer', 'flag']
//const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
/*

//db = new pg.Client(connectionString);

db = new pg.Client ({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: true
})

db.connect().catch(e => console.log(e));

*/
//Usage:
//client.query("INSERT INTO junk(name, a_number) values('Ted',12)");
//client.query("INSERT INTO junk(name, a_number) values($1, $2)", ['John', x]);



// on Heroku access via process.env.VARIABLE

//db.end()

//The traditional cap for localized Pokemon name (of which Tokimon is obviously based on) is 10 characters, so I think it's reasonable to give a hard cap of a few letters for each name. Longer names and/or formes (if I implement such a thing) will be appended afterwards via flags or some jazz I guess.
//varchar used over char because names are variable length

function printRow(data) { //parsing the garbage that .query() gives us is hard
  //takes a row of data from a query(), usually gotten by ___.rows
  str = ""
  for (x = 0; x < col.length; x++) {
    str = str + data[col[x]] + ", "
  }
  return str
}

function listRow(data) {
  lis = []
  for (x = 0; x < col.length; x++) {
    lis.push(data.temp)
  }
  return lis
}

/*
function printDB() { //DEBUG
  db.query("SELECT * FROM tokimon;", (err, res) =>{
    if (err) {
      console.log(err)
    } else { //begin print func
      
      for (i = 0; i < res.rows.length; i++) {
          console.log( printRow(res.rows[i]) )
      }
    
    }
  })
  console.log("printDB() called - this is for debug only")
}


function resetTable() {
  db.query(`DROP TABLE tokimon;
            CREATE TABLE tokimon (id int not null, name varchar, weight float, height float, fly int, fight int, fire int, water int, elec int, ice int, total int, trainer varchar not null, flag int);`)
  
}
*/

function showHome() {
  document.getElementById("content").innerHTML = '<h1>Welcome to Tokimon!</h1><h2>What are Tokimon?</h2><p>A Tokimon is a rare creature found in remote areas of Korea. For the most part, they resemble rabbits and the only form of communication they have with us is the ability to say their own name. Tokimon come in all shapes and sizes, have special abilities, and can fight with each other on occasion. Each Tokimon may have the ability to fly, fight, throw fire, spray water, electrify, and freeze other Tokimon; their ability is measured by an integer between 0 and 100. Because they are such primitive creatures but have such extraordinary abilities, they need Tokimon trainers. This webtool is to help log and track Tokimon and their associated trainers.</p><h2>How to use</h2><p>Use the buttons below to navigate. The <b>Tokidex</b> can be used to view a list of all caught Tokimon, or you can add your own captured Tokimon on the <b>add</b> page. Use the <b>edit/delete</b> tool to remove unwanted Tokimon from the database. You <u>monster</u>. You can also view the Tokimon of any trainer on the <b>Trainer</b> page.</p>'
  
}

function showTokidex() {
  
  
}

function showAdd() {
    document.getElementById("content").innerHTML = ""
  
}

function showEdit() {
  
  
}

function showTrainers() {
  
  
}

