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
    // run the "displayProducts" & "what do you want" functions after connection

    wdyw();
  });
  
  // main function display products, take customer input, update database
  function wdyw() {
    // query the database for all items being auctioned
  connection.query("SELECT * FROM items", function(err, results) {
    if (err) throw err;
    //prompt user to selct product & qty
    inquirer
      .prompt([
          {
        name: "productid",
        type: "rawlist",
        choices: function() {
            var idArray = [];
            for (var i = 0; i < results.length; i++) {
              idArray.push(results[i].item_id);
            }
            return idArray;
          },
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
        //console.log(answer)
        //console.log(results)
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id === answer.productid) {
            chosenItem = results[i];
          }
        }
        //console.log(chosenItem)
        // based on their answer check to see if we have enough in stock
        if(chosenItem.stock_quantity >= parseInt(answer.quantity)) {
            //enough stock to fill order so update db by reducting qty on product
            connection.query(
                "UPDATE items SET ? WHERE ?",
                [
                  {
                    stock_quantity: chosenItem.stock_quantity - answer.quantity
                  },
                  {
                    item_id: chosenItem.productid
                  }
                ],
                function(error) {
                  if (error) throw err;
                  let total = answer.quantity*chosenItem.price;
                  console.log("Your order total is " + total);
                  wdyw();
                }
              );
        }
        else {
        //out of stock
        console.log("Insufficient quantity!"); 
        wdyw();
        }  
    });
  })};
