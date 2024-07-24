const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });

const app = express();
const port = process.env.PORT || 4000;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Ligne de débogage
console.log('MONGO_URL:', process.env.MONGO_URL);

// Connexion à MongoDB
const mongoURI = process.env.MONGO_URL;
if (!mongoURI) {
  console.error('MONGO_URL is not defined in the environment variables.');
  process.exit(1);
}

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Route de base
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
