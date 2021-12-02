const net = require("net");
const {connect} = require("./client.js");
let connection;

const conn = connect();
const setupInput = function (conn) {
  connection = conn;
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

  if (keyPressed === "w") {
    conn.write("Move: up");
  }
  if (keyPressed === "a") {
    conn.write("Move: left");
  }
  if (keyPressed === "s") {
    conn.write("Move: down");
  }
  if (keyPressed === "d") {
    conn.write("Move: right");
  }

  if (keyPressed === "z") {
    conn.write("Say: im a w0t?");
  }
  if (keyPressed === "x") {
    conn.write("Say: omg");
  }
  if (keyPressed === "c") {
    conn.write("Say: omg");
  }
  if (keyPressed === "v") {
    conn.write("Say: ahhhhh");
  }
  if (keyPressed === "b") {
    conn.write("Say: proud of myself");
  }



/*   setInterval(() => {
    conn.write("Move: up");
  }, 1000); */
};

module.exports = {setupInput};