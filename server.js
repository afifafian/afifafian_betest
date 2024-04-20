import app from './app.js';

const port = process.env.PORT || 4001;

await new Promise((resolve) => app.listen({ port }, resolve));
console.log(`🚀 Server ready at ${port}`);
