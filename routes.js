const data = require('./data')

module.exports = app => {
    app.get('/users', (req, res)=> {
        res.json(data)
    })
    app.post('/users', (req, res)=> {
        data.push(req.body)
        res.json({ status: 'created user' })
    })
    app.use('/', (req, res)=> {
        res.render('home', { data })
    })
}
   

