# Part 2 - Basic API testing

## Overview
Automated API tests for JSONPlaceholder REST API using Javascript, Mocha, Chai and Axios.

## Tech Stack:
- **Mocha** - Test framework
- **Chai** - Assertion library 
- **Axios** - HTTP client

## Project Structure
```
part2-api-testing/
├── api-test/
│   └── JSONPlaceholder.js
└── package.json
```

## Test cases
Test cases are under the folder api-test in a file "JSONPlaceholder.js"
1. **GET /users/1** - Fetch a user and validate response structure (id, name,email)
2. **POST /posts** - create a new post and verify the 201 status
3. **GET /users/999** - validate 404 error handling for non-existent user

## Installation
```bash
npm install mocha chai axios mochawesome
```

## Run tests
```bash
npm mocha ./api-test/JSONPlaceholder.js --timeout=20000 --reporter mochawesome
```

## View Reports
Open `mochawesome-report/mochawesome.html` in your browser to view the test report.
