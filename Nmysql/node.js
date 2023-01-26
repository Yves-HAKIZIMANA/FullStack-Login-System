const mysql = require('mysql2');
const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true}))


app.get('/', (req, res) => {
    res.send(`
    <form action="/submit" method="post">
        <label for="name">Email:</label>
        <input type="email" id="name" name="email" required>
        <br>
        <label for="email">Password:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <input type="submit" value="Submit">
    </form>
    `);
});

app.post('/submit', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    connection.query(
        'INSERT INTO Info (Email, Password) VALUES (?, ?)',
        [email, password],
        (err, result) => {
            if (err) throw err;
            res.send('Data inserted successfully');
        }
    );
});





// Create a connection to the MySQL server
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'new_password',
  database: 'LoginInformation'
});

// Connect to the MySQL server
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }

  console.log('Connected as id ' + connection.threadId);
});

// Run a query


// Close the connection
// connection.end();
app.listen(8080, () => {
  console.log('Server started on http://localhost:8080');
});