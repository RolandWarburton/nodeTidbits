const fs = require('fs')
const path = require('path')
const util = require('util')

// Definitions 
// synchronous (single thread)
// asynchronous (single thread w/ concurrency) <-- nodejs is this
// parallel (multi thread)

// =========================

// Example 01
// setTimeout places console.log(2) on the callback queue to execute on later
// setTimeout runs asynchronously and once console.log(1) 
// is run it loops back and checks the callback queue and then runs console.log(2).
// Therefore the output is 1,2

setTimeout(() => {
    console.log(2)
}, 0);

console.log(1)

// =========================

// Example 02
// This async function will start to read stuff.txt
// Readfile is supplied a callback function with (err, data)
// Once it finishes reading it returns the callback and prints the contents '😃'

fs.readFile(path.resolve(process.cwd(), 'data/stuff.txt'), (err, data) => {
    console.log(data.toString());
})

console.log('here')

// =========================

// Example 03
// the callback stack is RANDOM af. you will get callbacks in any random order
// data
// ├── 1.txt
// ├── 2.txt
// ├── 3.txt
// This could return in order 1,3,2 or 1,2,3 etc

for (let i = 1; i <= 3; i++) {
    const filepath = path.resolve(process.cwd(), 'data/', i + '.txt')
    console.log(filepath)
    fs.readFile(filepath, (err, data) => {
        console.log(data.toString());
    })
}

// =========================
// Example 04
// Promises allow you to avoid callback hell. You can deal with an eventual value

const promise = new Promise((resolve, reject) => {
    resolve('good to go')
    // reject('not good to go')
}).then(value => {
    // the resolve is passed down to value
    console.log(value)
    // You can reject values here too
    // throw 'really bad error'
}).catch(err => {
    // the reject is passed down to err
    // errors go in a catch block
    console.log(err)
})

// another fs example but with promises
const promise = new Promise((resolve, reject) => {
    fs.readFile(path.resolve(process.cwd(), 'data/stuff.txt'), (err, data) => {
        if (!err) resolve(data)
        if (err) reject(err)
    })
}).then(data => {
    console.log(data.toString())
}).catch(err => {
    console.log(err)
})

// the fs promise above but using the util library

const read = util.promisify(fs.readFile)
read(path.resolve(process.cwd(), 'data/stuff.txt'))
    .then(data => {
        console.log(data.toString())
    })


// =========================

// Example 05
// Promise.all example
// take an array of promises and resolve all of them in parallel 😃

const read = util.promisify(fs.readFile)
const filepath = path.resolve(process.cwd(), 'data/stuff.txt')
Promise.all([
    read(filepath), 
    read(filepath), 
    read(filepath)])
    .then(data => {
        // unpack the array of data into 3 arrays. 
        // js magic ✨
        const [data1, data2, data3] = data
        console.log(data1.toString())
    })

// =========================

// Example 06
// return a promise

function a() {
    return Promise.resolve('😃')
}

console.log(a())

// =========================

// Example 07
// async/await

const read = util.promisify(fs.readFile)
const filepath = path.resolve(process.cwd(), 'data/stuff.txt')

// This function is using a promise like above
const runMePromise = () => {
    read(filepath)
        .then(data => {
            console.log(data.toString())
        })
}

// This is exactly like the above promise except using async/await 
const runMeAsync = async () => {
    const myData = await read(filepath)
    // this will wait and then print when await is done
    console.log(myData.toString())
}

runMeAsync()
runMePromise()

// Error handling in async is done in a try/catch block
const runMeAsync = async () => {
    try {
        const myData = await read(filepath)
        // this will wait and then print when await is done
        console.log(myData.toString())
    } catch (err) {
        console.log(err)
    }
    
}

runMeAsync()