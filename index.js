var express = require('express')

var app = new express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('homepage.ejs')
})

app.get('/error', (req, res) => {
    res.send(JSON.stringify('NO URL FOUND!!'))
})

app.use((req, res, next) => {
    res.redirect('/error')
})

app.listen(process.env.PORT || 8007, () => {
    console.log(`Listening to ${process.env.PORT}  PORT`)
})