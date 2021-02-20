//* Import server
const server = require("./api/server");

//* Specify PORT to use
const PORT = 5000;

//* Start server
server.listen(PORT, () => {
  console.log(`\n=== Server running at http://localhost:${PORT}/ ===\n`);
});
