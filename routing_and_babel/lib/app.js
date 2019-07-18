"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleRequest = handleRequest;

var _url = _interopRequireDefault(require("url"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// "use strict";
function renderHTML(path, response) {
  _fs["default"].readFile(path, null, function (error, data) {
    if (error) {
      response.writeHead(404);
      response.write('File not found!');
    } else {
      response.write(data);
    }

    response.end();
  });
}

function handleRequest(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });

  var path = _url["default"].parse(request.url).pathname;

  switch (path) {
    case '/':
      renderHTML('./index.html', response);
      break;

    case '/page2':
      renderHTML('./page2.html', response);
      break;

    default:
      renderHTML('./404.html', response);
  }
}

;