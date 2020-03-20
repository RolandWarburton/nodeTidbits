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
    { "distpath": "Notes/Bookmarks", "filepath": "Notes/Bookmarks", "template": "./templates/template-list-item.ejs", "title": "Bookmarks" },
    { "distpath": "Notes/Linux", "filepath": "Notes/Linux", "template": "templates/template.ejs", "title": "Linux" },
    { "distpath": "Notes/Programming", "filepath": "Notes/Programming", "template": "templates/template.ejs", "title": "Programming" },
    { "distpath": "Notes/Tools", "filepath": "Notes/Tools", "template": "templates/template.ejs", "title": "Tools" },
    { "distpath": "Notes/University", "filepath": "Notes/University", "template": "templates/template.ejs", "title": "University" }
]


const root = [
    { "distpath": "About", "filepath": "About", "template": "templates/template.ejs", "title": "About" },
    { "distpath": "Notes", "filepath": "Notes", "template": "./templates/template-list-item.ejs", "title": "Notes" },
    { "distpath": "Writing", "filepath": "Writing", "template": "templates/template.ejs", "title": "Writing" },
    { "distpath": "index", "filepath": "index", "template": "./templates/template-home.ejs", "title": "index" }
]

describe("Test ListAllFilesInDir", () => {
    test("return an array of routes in a given directory", () => {
        // let tpmap = generateTemplateMap()
        // console.log(tpmap)

        const routeMap = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'temp/routeMap.json')))
        expect(ListFilesInDir(routeMap, 'Notes/Tools/')).toEqual(NotesSlashTools);
        expect(ListFilesInDir(routeMap, 'Notes/')).toEqual(Notes);
        expect(ListFilesInDir(routeMap, 'Notes')).toEqual(Notes);
        expect(ListFilesInDir(routeMap, '/')).toEqual(root);
    });
});
