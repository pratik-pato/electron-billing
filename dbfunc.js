const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./crm.db', (err) => {
	  if (err) {
	    console.log(err.message);
	  }
	  console.log('Connected to the chinook database.');
	});

exports.insertUser = (name,password) => {
	db.run(`INSERT INTO user(name,username,password) VALUES(?,?,?)`, [name,name,password], function(err) {
	    if (err) {
	      return console.log(err.message);
	    }
	    // get the last insert id
	    console.log(`A row has been inserted with rowid ${this.lastID}`);
	  });

}