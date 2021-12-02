const net = require("net");
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server.");
    conn.write("Name: YAY");
  });
  
  conn.on('data', function(message) {
    console.log(`Server says: ${message}`);
  });
  

  return conn;
};

module.exports = {connect};