const fs = require('fs')
const path = require('path')
const fp = require('../build/filepathHelper')

describe("Test filePath", () => {
    test("converts any filepath To String", () => {
        const expected = 'Notes/Linux/LinuxIntro/index.html'

        const filepathString = 'Notes/Linux/LinuxIntro/index.html'
        const filepathArray = ["Notes", "Linux", "LinuxIntro", "index.html"]

        expect(fp.filepathToString('Notes/Linux/LinuxIntro/index.html')).toEqual(expected);
        expect(fp.filepathToString(["Notes", "Linux", "LinuxIntro", "index.html"])).toEqual(expected);
    });
});

describe("Test filePath", () => {
    test("converts any filepath To Array", () => {
        const expected = ["Notes", "Linux", "LinuxIntro"]

        const filepathString = 'Notes/Linux/LinuxIntro/index.html'
        const filepathArray = ["Notes", "Linux", "LinuxIntro", "index.html"]

        expect(fp.filepathToArray(filepathString)).toEqual(expected);
        expect(fp.filepathToArray(filepathArray)).toEqual(expected);
        expect(fp.filepathToArray('Notes/')).toEqual(['Notes']);
        expect(fp.filepathToArray('')).toEqual([]);
        expect(fp.filepathToArray('/')).toEqual([]);
    });
});

describe("Test filePath", () => {
    test("sanitizes HTML filepaths", () => {
        const expected = 'Notes/Linux/LinuxIntro'

        expect(fp.sanitizeHTMLfilepath('Notes/')).toEqual('Notes');
        expect(fp.sanitizeHTMLfilepath('Notes/Linux/LinuxIntro/index.html')).toEqual(expected);
        expect(fp.sanitizeHTMLfilepath('Notes/Linux/LinuxIntro')).toEqual(expected);
        expect(fp.sanitizeHTMLfilepath(["Notes", "Linux", "LinuxIntro", "index.html"])).toEqual(expected);
        expect(fp.sanitizeHTMLfilepath(["Notes", "Linux", "LinuxIntro"])).toEqual(expected);
        expect(fp.sanitizeHTMLfilepath('/Notes/Linux/LinuxIntro')).toEqual(expected);
    });
});

describe("Test filePath", () => {
    test("Gets correct route length", () => {

        expect(fp.lengthOfRoute('Notes/')).toEqual(1);
        expect(fp.lengthOfRoute('Notes/Bookmarks')).toEqual(2);
        expect(fp.lengthOfRoute('')).toEqual(0);
        expect(fp.lengthOfRoute('/')).toEqual(0);
        expect(fp.lengthOfRoute('/Notes/test')).toEqual(2);
        expect(fp.lengthOfRoute('Notes')).toEqual(1);
    });
});

describe("Test filePath", () => {
    test("Check if a path exists", () => {
        const routeMap = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'temp/routeMap.json')))

        expect(fp.checkIfPathExists(routeMap, 'Notes/')).toEqual(true);
        expect(fp.checkIfPathExists(routeMap, 'Notes/Bookmarks')).toEqual(true);
        expect(fp.checkIfPathExists(routeMap, 'Notes/Bookmarks/')).toEqual(true);
    });
});
