const net = require("net");
const {connect} = require("./client.js");

const conn = connect();
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  
  stdin.on('data', function(keyPressed) {
    handleUserInput(keyPressed);//console.log(`Server says: ${message}`);
  });
  return stdin;
};

const handleUserInput = function (keyPressed) {
  if (keyPressed === '\u0003') {
    process.exit();
  }
  setInterval(() => {
    conn.write("Move: up");
  }, 1000);
};

module.exports = {setupInput};