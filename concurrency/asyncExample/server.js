const path = require('path')
const fs = require('fs');
const util = require('util')
const foo2 = require('./func2')
const func1 = require('./func1')

const myFunction = async () => {
    const value = await func1('data', (data) => {
        console.log(data)
    })
}

myFunction()