const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const app = express();

app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(routes);

// const error = new Error('The requests page couldn\'t be found.');

// app.use((error,req,res,next) => {
//     console.log(error);
//     res.status(404)
// })

const port = 8080;

app.listen(port, () => console.log(`listening on port ${port}...`))
