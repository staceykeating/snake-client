const net = require('net');


const connect = () => {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', function(data) {
    console.log(data);
  });
  conn.on('connect', function(data) {
  console.log('Successfully connected to the game server');
  });
  conn.on('connect', () => {
  conn.write("Name: SAK")
});
return conn;
}
module.exports = connect;
// conn.on('connect', () => {
//  conn.write("Move: up")
// });
// conn.on('connect', () => {
//   setInterval(function() {
//   conn.write("Move: left"); }, 3000);
//  });


