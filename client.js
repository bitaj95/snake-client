const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("client is connected to server.");
  });

  conn.on('data', function(message) {
    console.log(`Server says: ${message}`);
  });


  return conn;
};

module.exports = connect;