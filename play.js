const net = require("net");
const {connect} = require("./client.js");

// establishes a connection with the game server

const conn = connect();
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (keyPressed) {
    if (keyPressed === '\u0003') {
      process.exit();
    }
    setInterval(() => {
      conn.write("Move: up");
    }, 1000);
  };

  stdin.on('data', function(keyPressed) {
    handleUserInput(keyPressed);//console.log(`Server says: ${message}`);
  });
 
  return stdin;
};


console.log("Connecting ...");
setupInput();