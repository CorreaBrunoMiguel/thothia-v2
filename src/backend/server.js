import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Thothia v2 API is alive 🌿' });
});

app.listen(PORT, () => {
  console.log(`🌿 Thothia v2 backend running on port ${PORT}`);
});
