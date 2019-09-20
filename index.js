const app = require('express')()
const consign = require('consign')

app.set('view engine', 'ejs')

consign()
    .include('./boot.js')
    .then('./routes.js')
    .into(app)


