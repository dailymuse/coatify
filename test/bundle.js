var browserify = require("browserify"),
    coatify = require("../index"),
    fs = require("fs");

var b = browserify();
b.add("./test/test.coat");
b.transform(coatify);
b.bundle()
    .on("error", function(err){
        console.error(err.message)
    })
    .pipe(fs.createWriteStream("./test/test.js"));