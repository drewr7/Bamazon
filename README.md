# Bamazon

- My bamazon application shows users a list of products and allows them to select the products based IDs. We take the ID of the product that the customer is interested in and the quantity that the customer wants to purchase and look into the database to see if we have the stock available to fill the order. If we do have the stock available then we get the price of the product from the database and multiply it by the quantity to give the customer their order total. 

- The app is organized by first creating the connection to the database and then connecting. The application then runs a function to prompt the user for the id and quantity of the product they are interested in. We populate the products in a choice prompt by running a SELECT * FROM. It then takes their answers looks at the database to check and update the stock quantiity if it is available. After that we return the order total.

- To run the app just use npm install to install the packages then in the terminal/command line window you will run "node bamazonCustomer.js". Then you will select the ID of the product and then the quantity desired. After you have made those two selections it will return to you the order total based on price and quantity.

## Screenshots

1. Select Product - ![firstprompt]
2. Select Quantity - ![secondprompt]
3. Show Order Total - ![ordertotal]
4. Prompt Again - ![promptagain]

- Deployed version: https://drewr7.github.io/Bamazon/.

 - The technologies used to create this app were javascript to write the code. Node.js to run the application. I used NPM(Node Package Manager) to install packages such as inquirer for prompting. Lastly, I used MySQL Workbench as the database to store the product data.no