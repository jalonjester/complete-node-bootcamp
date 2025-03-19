const app = require(`${__dirname}/app.js`)
const port = 3000;
app.listen(port, () => {
  console.log(`Ruinning on port ${port}...`);
});
