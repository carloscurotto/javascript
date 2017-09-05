var spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
	// spawn the process and return a single stream
	var spawnedProcess = spawn(cmd, args);
	// joining together the stdin and stdout here
	return duplexer2(spawnedProcess.stdin, spawnedProcess.stdout);
};
