const express = require('express');
const {connectDb} = require('./data/config');
const cors = require('cors');
const productRouter = require('./routes/productsRoutes');

const PORT = 3001;

//Crear la instancia de express
const app = express();
app.use(express.json());
app.use(cors());
connectDb();

app.use('/products', productRouter);

app.listen(PORT, () => {
  console.log('Products running in http://localhost:'+PORT + '/products');
});