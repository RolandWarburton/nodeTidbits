const fs = require('fs')
const path = require('path')
const ListFilesInDir = require('../build/listFilesInDir')
const generateRouteMap = require('../build/generateRouteMap')
const getRoutePositionInDir = require('../build/getRoutePositionInDir')

// listFilesInDir() will return a list of all the files in a directory
// then we test to see if a particular filepath is contained in that array, and return its index

describe("Test ListAllFilesInDir", () => {
    test("returns the index of an a filepath in its own directory", () => {
        const routeMap = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'temp/routeMap.json')))

        // Notes/Tools referring to Notes/Tools.html (not the directory Notes/Tools)
        expect(getRoutePositionInDir(routeMap, 'Notes/Tools')).toEqual(3);
        expect(getRoutePositionInDir(routeMap, 'Notes/Tools/ToolsIntro')).toEqual(0);
        expect(getRoutePositionInDir(routeMap, 'index')).toEqual(3);
        expect(getRoutePositionInDir(routeMap, 'Writing')).toEqual(2);
        expect(getRoutePositionInDir(routeMap, 'Notes')).toEqual(1);
        expect(getRoutePositionInDir(routeMap, 'About')).toEqual(0);
    });
});
