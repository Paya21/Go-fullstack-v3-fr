const mongoose = require ('mongoose');
const express = require('express'); /*importer express*/
const path = require('path');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');


mongoose.connect('mongodb+srv://clem_master:Clemdu64mon@cluster0.sgpbmb6.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussi !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(express.json()); //intercèpte touts les requête de type json et le met à dispo avec req.body

app.use((req, res, next) => { //app.use intercèpte toutes les requêtes (get post etc..)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use('/api/stuff', stuffRoutes);
  app.use('/api/auth', userRoutes);
  app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
