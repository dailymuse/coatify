var coat = require("mithril-coat"),
    through = require("through");

function isCoat(file) {
    return /\.coat$/.test(file);
}

function coatify(file) {
    if (!isCoat(file)) return through();

    var data = "",
        stream = through(write, end);

    function write (buf) {
        return data += buf;
    }

    function end () {
        coat.compile(data, {}, function(error, compiledTemplate) {
            var template = "";

            if (error) {
                stream.emit("error", error);
            } 

            template = "module.exports = function(view, state) { return " + compiledTemplate + " };"

            stream.queue(template);
            stream.queue(null);
        });
    }

    return stream;
}

module.exports = coatify;