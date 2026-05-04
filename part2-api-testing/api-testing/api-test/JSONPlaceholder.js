const axios = require("axios");
const {expect} = require("chai");

const base_URL =  "https://jsonplaceholder.typicode.com"

describe('JSONPlaceholder API Tests', () => {
  it('should fetch user successfully', async () => {
    const res = await axios.get(`${base_URL}/users/1`);
    console.log(res.data)
    expect(res.status).to.equal(200);
    expect(res.data).to.have.property('id');
    expect(res.data).to.have.property('name');
    expect(res.data).to.have.property('email');
  });

  it('should create new post', async () => {
    const res = await axios.post(`${base_URL}/posts`, {
        "userId":25,
        "title": "Testing a new post request",
        "body": "I am trying to write a new post request and see if it is successful or not"
        });
    console.log(res.data)
    expect(res.status).to.equal(201);
  });

  it('should handle non-existent user', async () => {
    try{
        await axios.get(`${base_URL}/users/999`);
    } catch (error) {
        console.log(error.code)
        expect(error.response.status).to.equal(404);
        }
  });
});
