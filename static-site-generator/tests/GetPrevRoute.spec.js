const fs = require('fs')
const path = require('path')
const templateMap = require('../temp/routeMap.json')
const getPrevRoute = require('../build/getPrevRoute')
const filepathHelper = require('../build/filepathHelper')

describe("Test readFile", () => {
    test("gets a valid back link", () => {
        const routeMap = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'temp/routeMap.json')))
        expect(getPrevRoute(routeMap, 'Notes/Linux/LinuxIntro')).toEqual('Notes/Linux');
        expect(getPrevRoute(routeMap, 'Notes/Linux/LinuxIntro/index.html')).toEqual('Notes/Linux');
        expect(getPrevRoute(routeMap, 'Notes/Tools/ToolsIntro/index.html')).toEqual('Notes/Tools');
        expect(getPrevRoute(routeMap, 'Notes/Tools/ToolsIntro')).toEqual('Notes/Tools');
        expect(getPrevRoute(routeMap, 'Notes')).toEqual('');
        expect(getPrevRoute(routeMap, '')).toEqual('');
    });
});
