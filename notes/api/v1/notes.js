const fs = require('fs');

function getNotes(request, response) {

  //console.log('getNotes');

  fs.readFile('api/db.json', (err, data) => {
    if (err) {
      throw err;
    }

    //console.log('baseurl',request);

    let notesList = JSON.parse(data);
    //console.log(notesList);

    const userid = request.query.userId;
    //console.log('Query param :', userid);

    if (userid) {
      let note = notesList.notes.find((ele) => ele.userid === userid);
      response.send(note);
    } else {
      response.send('Invalid UserID');
    }

  });

}

module.exports = getNotes;