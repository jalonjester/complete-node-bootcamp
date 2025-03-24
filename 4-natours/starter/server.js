const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require(`${__dirname}/app.js`);

console.log(process.env);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Ruinning on port ${port}...`);
});
