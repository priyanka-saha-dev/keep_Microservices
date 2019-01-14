const fs = require('fs');

let getAllUsers = (request, response) => {

  //console.log('getAllUsers');
  fs.readFile('api/db.json', (err, data) => {
    if (err) {
      throw err;
    }

    let users = JSON.parse(data);
    //console.log(users);

    response.send(users);
  });

};

let getUserByUserID = (request, response) => {

  //console.log('getUserByUserID');
  fs.readFile('api/db.json', (err, data) => {
    if (err) {
      throw err;
    }

    let usersList = JSON.parse(data);

    let user = usersList.users.find((ele) => ele.userId === request.params.userId);
    //console.log(user);

    response.send(user);
  });
};


module.exports = {
  getAllUsers,
  getUserByUserID
};