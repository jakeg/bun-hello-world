import { env } from 'process'

let count = 0;
const start = Date.now();

const server = Bun.serve({
  port: env.PORT || 3000, // Heroku expects your app to bind to env.PORT
  fetch(request) {
    return new Response(`<!doctype html>
      <h1>Welcome to Bun, running on Heroku!</h1>
      <p>${ ++count } hits since the last Dyno restart ${ Math.round((Date.now() - start)/1000) }s ago.</p>
    `, { headers: { "Content-Type": "text/html" } } );
  },
});

console.log(`Listening on localhost:${server.port}`);
