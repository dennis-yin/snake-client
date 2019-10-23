// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;

  const handleUserInput = function(key) {

    if (key === 'x') {
      connection.write('Say: YO!');
    }

    if (key === 'w') {
      connection.write('Move: up');
    }

    if (key === 'a') {
      connection.write('Move: left');
    }

    if (key === 's') {
      connection.write('Move: down');
    }

    if (key === 'd') {
      connection.write('Move: right');
    }

    if (key === '\u0003') {
      process.exit();
    }

  };

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

module.exports = { setupInput };