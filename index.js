import { env } from 'process'

const server = Bun.serve({
  port: env.PORT || 3000,
  fetch(request) {
    return new Response("Welcome to Bun, running on Heroku!");
  },
});

console.log(`Listening on localhost:${server.port}`);
