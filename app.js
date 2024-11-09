const express = require('express');
const { createHandler } = require("graphql-http/lib/use/express")
const schema = require('./graphql/schema');
const db = require('./models');

const app = express();

db.sequelize.authenticate().then(() => console.log('Database connected...')).catch(err => console.log('Error: ' + err));

app.use('/graphql', createHandler({
  schema: schema,
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
