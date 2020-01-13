import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import path from 'path';

import schema from './schema';

const app = express();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀  -> ${PORT}`));
