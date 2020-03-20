const fs = require('fs')
const path = require('path')
const ListFilesInDir = require('../build/listFilesInDir')
const generateRouteMap = require('../build/generateRouteMap')
// const routeMap = require('../temp/routeMap.json')

const NotesSlashTools = [
    {
        "distpath": "Notes/Tools/ToolsIntro",
        "filepath": "Notes/Tools/ToolsIntro",
        "template": "./templates/template-dynamic-nav.ejs",
        "title": "ToolsIntro"
    },
]

const Notes = [
    { "filepath": "notes/notes", "template": "./templates/template.ejs", "title": "notes" }
]


const root = [
    { "distpath": "index", "filepath": "index", "template": "./templates/template-home.ejs", "title": "index" }
]

describe("Test ListAllFilesInDir", () => {
    test("return an array of routes in a given directory", () => {

        const routeMap = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'temp/routeMap.json')))
        expect(ListFilesInDir(routeMap, 'notes')).toEqual(Notes);
    });
});
