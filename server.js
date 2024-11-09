const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const aboutRoutes = require('./routes/about');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/admin/about', aboutRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/mern_website', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Admin MongoDB connected'))
  .catch(err => console.error(err));

app.listen(5002, () => {
  console.log('Admin backend server running on port 5002');
});
