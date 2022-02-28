
import express from 'express';
import allRoutes from './src/route/restRoute.js';
const app = express();
const port = 4000;
allRoutes(app);
app.get('/', (req, res) =>
    res.send(`Your node and express server is running on port: ${port}`)
);
app.listen(port, () => {
    console.log("restAPI is running on port: " + port);
});