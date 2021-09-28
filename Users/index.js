import { readFile } from "fs";

class Users {
    get(response) {
        readFile("./Users/users.json", (err, data) => {
            if(err) console.log(err);
            response.write(data);
            response.end();
        })
    }
    getUsersByAge(response){
        readFile("./Users/users.json", (err, data) => {
            if(err) console.log(err);
           let usersByAge = JSON.parse(data);
           console.log(usersByAge);
           let finalUsers = (usersByAge.users).filter(users => {
               return users.age > 24;
           });
           response.write(JSON.stringify(finalUsers));
           response.end();
        })
    }
}

export default Users