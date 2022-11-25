var request = require('request');
var expect = require('chai').expect;
var baseURL = "http://localhost:3000";

describe('fetching suggestions API',()=>{
    test('fetching groups of suggestions expecting response 200', (done) => {
        request.get(baseURL + "/api/suggestions", (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        })
    })

    test('fetching groups of product 1 suggestions expecting response 200', (done) => {
        request.get(baseURL + "/api/p/1/suggestions",(error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        })
    })

    test('fetching groups of suggestions expecting response 404',(done) => {
        request.get(baseURL + "/api/suggestions312", (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        })
    })
})