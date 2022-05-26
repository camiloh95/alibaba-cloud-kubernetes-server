require('dotenv').config();
const app = require('express')();

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('You can listen to me, the server is alive!');
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
