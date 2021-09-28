import { createServer } from 'http'; 
import Users from './Users/index.js';
import Admin from './Admin/index.js';

const users = new Users();
const admin = new Admin();

createServer(function (request, response) {
   if (request.url === "/users") {
        users.get(response);
   } else if (request.url === "/users/age") {
       users.getUsersByAge(response)
   }
   else if (request.url === "/admin") {
    response.write(JSON.stringify(admin.get()));
    response.end();

   } else {
        response.write('Default url'); //write a response
        response.end(); //end the response
   }
   
 }).listen(3000, function(){
  console.log("server start at port 3000"); //the server object listens on port 3000
 }); 