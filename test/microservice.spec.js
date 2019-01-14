let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../apigateway/app');
var expect = chai.expect;

chai.use(chaiHttp);

describe('GET Notes for UserID', () => {

  it('should return note for userId', () => {

    chai.request(server)
      .get('/notes/?userId=u1')
      .then((resp) => {

        // console.log('test data', resp.body);

        expect(resp).to.have.status(200);
        expect(resp.body).to.have.property('noteId');

        const noteID = resp.body.noteId;
        expect(noteID).to.equal(1);

        const userID = resp.body.userid;
        expect(userID).to.equal('u1');

      });
  });

});

describe('GET User details for UserID', () => {

  it('should return user for userId', () => {

    chai.request(server)
      .get('/users/u1')
      .then((resp) => {

        // console.log('test data', resp.body);

        expect(resp).to.have.status(200);
        expect(resp.body).to.have.property('userId');
        expect(resp.body).to.have.property('username');
        expect(resp.body).to.have.property('password');

        const userID = resp.body.userId;
        expect(userID).to.equal('u1');

      });
  });

});
