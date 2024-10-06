const express = require('express');
const app = express();
const spacecraftRouter = require('./routes/Spacecraft');
const astronautsRouter = require('./routes/Astronauts');

app.use('/spacecraft', spacecraftRouter);
app.use('/astronauts', astronautsRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
