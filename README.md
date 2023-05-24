# e-Commerce Backend

## Description

Internet retail i.e. e-commerce, is an extremely large industry. As such it is extremely prevalent in the tech industry. 

My goal with this project was to build a simple example backend that could be used as a starting point for an e-commerce website.

It is built with Express.js as the server framework and it uses the Sequelize and MySQL2 packages to interface with the database.

## Installation

To install the project: 

1. clone the repository at [github.com/sadums/ecommerce-backend](https://github.com/sadums/ecommerce-backend)

2. Navigate to the project directory in your terminal "/ecommerce-backend"

3. Install the following dependencies with 
```
npm install
```

- [Express](https://www.npmjs.com/package/express "npmjs.com")
- [MySQL2](https://www.npmjs.com/package/mysql2 "npmjs.com")
- [Sequelize](https://www.npmjs.com/package/sequelize "npmjs.com")

## Usage

To set up the server after installation:

1. **Rename the .env.EXAMPLE file to .env and put in your password and username in the corresponding quotations**

2. Navigate to the repository directory in your terminal

3. Run the schema.sql by entering the SQL shell

* navigate to the ./db/ directory in your terminal
* run this command to enter the SQL shell
```
mysql -u root -p
```
> Note: if you don't have a database password, you do not need -p at the end
* once in the SQL shell, enter this command to run the schema.sql file
```
source schema.sql
```
* to quit SQL shell, just enter `quit`

4. Navigate back to the main directory and run this command to seed the database
```
npm run seed
```
5. Run this command to start the server
```
npm start
```

Your server should now be running.
> Note: to change what port the server is running on, edit the `PORT` variable in the `server.js` file.

You can now use the following endpoints

Get all products: `"GET: /api/products/"`

Get a specified product: `"GET: /api/products/id"`

Create a new product: `"POST: /api/products/"`

Update a specified product: `"PUT: /api/products/id"`

Delete a specified product: `"DELETE: /api/products/id"`

Get all categories: `"GET: /api/categories/"`

Get a specified category: `"GET: /api/categories/id"`

Create a new category: `"POST: /api/categories/"`

Update a specified category: `"PUT: /api/categories/id"`

Delete a specified category: `"DELETE: /api/categories/id"`

Get all tags: `"GET: /api/tags/"`

Get a specified tag: `"GET: /api/tags/id"`

Create a new product: `"POST: /api/tags/"`

Update a specified tag: `"PUT: /api/tags/id"`

Delete a specified tag: `"DELETE: /api/tags/id"`


**For a video walkthrough click [here](https://drive.google.com/file/d/1NT7ifGo1KQ1r--Dwnk1YW6Cnoco3Px4G/view "drive.google.com")**


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is under the MIT License

## Questions 

For any questions, please contact me:

Github: [sadums](https://github.com/sadums)

Email: samjadams4@gmail.com