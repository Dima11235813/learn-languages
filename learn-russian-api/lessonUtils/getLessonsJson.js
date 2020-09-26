var fs = require('fs');

let lessonsFolderName = "lessons";
let fileName = `./${lessonsFolderName}/1.txt`;

require.extensions['.txt'] = function (module, filename) {
    fs.readFileSync(filename, 'utf8');
};

var lesson1 = require(fileName);

// console.log(typeof lesson1); // string
// Otherwise, you can mix fs.readFile with require.resolve:

module.exposts = function getLessonsJson(callback) {
    try {
        var filename = require.resolve(lesson1);
        fs.readFile(filename, 'utf8', callback);
    } catch (e) {
        callback(e);
    }
}