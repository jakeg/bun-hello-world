import { env } from 'process'

let count = 0;
let start = Date.now();

const server = Bun.serve({
  port: env.PORT || 3000, // Heroku expects your app to bind to env.PORT
  fetch(request) {
    return new Response(`<!doctype html>
      <h1>Welcome to Bun, running on Heroku!</h1>
      <p>You are visitor number ${ ++count } since the last Dyno restart ${ Math.round((Date.now() - start)/1000) }s ago.</p>
    `);
  },
});

console.log(`Listening on localhost:${server.port}`);
