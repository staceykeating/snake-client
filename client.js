const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', function(data) {
    console.log(data);
});
conn.on('end', function(data) {
  console.log('end');
});
  return conn;
}


module.exports = connect;