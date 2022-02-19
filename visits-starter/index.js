const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  host:'redis-server',  //name mentioned in the yaml file, redis-server is the container name created by docker-compose
  port: 6379    //by default redis run in this port, just written here for the name sake
});
client.set('visits', 0);

app.get('/', (req, res) => {
  process.exit(0)
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
