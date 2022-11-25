
var request = require('request');
var expect = require('chai').expect;
var baseURL = "http://localhost:3000";

describe('fetching Products API', () => {
    test('fetching Product 1 expecting status 200', (done) => {
        request.get({ url: baseURL + "/api/p/1" }, (error, response, body) => {
            var bodyObject = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
            expect(bodyObject.pageData.product.name).to.equal("Product 1");
            done();
        })
    })
    
    test('fetching Product 1 with red color expecting status 200', (done) => {
        request.get({ url: baseURL + `/api/p/1?color="red"` }, (error, response, body) => {
            var bodyObject = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
            expect(bodyObject.pageData.product.name).to.equal("Product 1");
            expect(bodyObject.pageData.product.colors[0].id).to.equal("red");
            done();
        })
    })

    test('fetching Product testing expecting status 500', (done) => {
        request.get({url: baseURL +'/api/p/testing'}, (error, response, body)=>{
            expect(response.statusCode).to.equal(500);
            done();
        })
    })
})