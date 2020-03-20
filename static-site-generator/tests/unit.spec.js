const path = require('path')
const readFile = require('../build/readFile')

function readAFilePath(filepath, array) {
    readFile(
        path.resolve(process.cwd(), filepath),
        ({ title, filepath }) => {
            array.push({ title, filepath })
        })
}

// takes a filepath to a view target
// reads the filepath and returns a title and filepath
// INPUT: 'src/views/about.js'
// OUTPUT: [{ title: "about", filepath: "about" }]
describe("Test readFile", () => {
    test("return readFile object from the base dir of views", () => {
        const data = []
        readAFilePath('src/views/about.js', data)
        expect(data).toEqual([{ title: "about", filepath: "about" }]);
    });
});

// takes a filepath to a view target
// reads the filepath and returns a title and filepath
// INPUT: 'src/views/about.js'
// OUTPUT: [{ title: "about", filepath: "about" }]
describe("Test readFile", () => {
    test("return readFile object from a sub dir of views", () => {
        const data = []
        readAFilePath('src/views/notes/notes1.js', data)
        expect(data).toEqual([{ title: "notes1", filepath: "notes/notes1" }]);
    });
});