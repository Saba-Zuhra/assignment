var request = require('request');
var expect = require('chai').expect;
var baseURL = "http://localhost:3000";

describe('fetching cart API', () => {
    test('fetching cart items status expecting 200', (done) => {
        request.get(baseURL + "/api/cart", (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        })
    })

    test('fetching cart items status expecting 404', (done) => {
        request.get(baseURL + "/api/cart213", (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        })
    })
})