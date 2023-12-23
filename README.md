# GraphQl_Apollo_server_poc
POC to see How GraphQL works with Apollo server on node js
This is a basic example of how GraphQL server works. In this example I have use apollo server and integrated this with node js. for more info you can refer here [https://www.apollographql.com/docs/apollo-server/getting-started]

## Code structure
 src (root folder) => _db.js ,index.ts,schema.ts

 * _db.js : This file will have data source  (it had three objects, Movies, authors,reviews)

 * note: You can use any data source. 

 * schema.ts : This file define schema for all three objects and it's allowed Query or Mutation. This is required for GraphQL to know how data are related and what all operations you are allowing to that data.

 * index.ts : this is the main server file, this have includes data source and schema definition. and one more part which is **resolvers** what ever methods/operations we define in schema.ts all those operations need to be resolved under resolvers.

 * Query : this is mainly for fetching the data.
 * Mutation : create ,update or delete operations

 ### clone this repo.
 * npm install (to install all dependency)
 * npm start (to compile and start the server)
 once server started you can open **http://localhost:4000/** to play with query on apollo client.
 

