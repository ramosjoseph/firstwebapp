const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.write(`
    <h1>Joseph William C. Ramos</h1>
    <h3>Section: IT BA - 4102</h3>

    <blockquote style="font-style: italic; margin-top: 20px;">
      "A person who never made a mistake never tried anything new." — Albert Einstein
    </blockquote>
  `);

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
