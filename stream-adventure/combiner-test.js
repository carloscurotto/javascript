var mycombine = require('./combiner.js');

var toTestStream = mycombine();

toTestStream.write(JSON.stringify({'type':'genre', 'name':'cyberpunk'}) + '\n');
toTestStream.write(JSON.stringify({"type":"book","name":"Neuromancer"}) + '\n');
toTestStream.write(JSON.stringify({"type":"book","name":"Snow Crash"}) + '\n');
toTestStream.write(JSON.stringify({"type":"genre","name":"space opera"}) + '\n');
toTestStream.write(JSON.stringify({"type":"book","name":"A Deepness in the Sky"}) + '\n');
toTestStream.write(JSON.stringify({"type":"book","name":"Void"}) + '\n');

toTestStream.end();