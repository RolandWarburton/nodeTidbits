const fs = require('fs')
const path = require('path')
const templateMap = require('../temp/routeMap.json')
const getPrevRoute = require('../build/getPrevRoute')
const filepathHelper = require('../build/filepathHelper')

describe("Test readFile", () => {
    test("gets a valid back link", () => {
        const routeMap = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'temp/routeMap.json')))
        expect(getPrevRoute(routeMap, 'notes')).toEqual('');
        expect(getPrevRoute(routeMap, '')).toEqual('');
    });
});
