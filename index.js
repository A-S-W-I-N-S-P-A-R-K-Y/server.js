const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/code', async (req, res) => {
  try {
    const { code } = req.query;
    const response = await axios.get("https://x-bot-md-qr.koyeb.app/code?number=" + code);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

app.get('/', async (req, res) => {
  try {
    const response = await axios.get("https://apiiiiiiii-cbb5554dc5df.herokuapp.com");
   return response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
