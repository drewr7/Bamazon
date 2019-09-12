var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Football7",
    database: "bamazon_db"
  });

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the "what do you want" function after connection
    wdyw();
  });
  
  // function which prompts the user for what product they want to purchase
  function wdyw() {
    inquirer
      .prompt([
          {
        name: "productid",
        type: "input",
        message: "Enter the item id of the product you would like to purchase"
      },
      {
        name: "quantity",
        type: "input",
        message: "How many units of this item would you like?",
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
      }
    ])
      .then(function(answer) {
        // based on their answer check to see if we have enough in stock
        

        // If not enough in stock display Insufficient quantity!

        // If in stock, fill customer order by reducing qty in database then show customer their total cost.
      });
  }
