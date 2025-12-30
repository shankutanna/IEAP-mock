const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/health', (req, res) => res.json({status: 'ok', service: 'frontend'}));
app.listen(process.env.PORT || 3000, () => console.log('Frontend running on 3000'));
