const express = require ('express');
const app = express ();
const passport = require ('passport');
require ('./services/passport');
require ('./routes/authRoutes')(app);





app.get('/', (req, res)=> {
    res.send('hello');
})



const PORT = process.env.PORT || 5000;
app.listen (PORT);
