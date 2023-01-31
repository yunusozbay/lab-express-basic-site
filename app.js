const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

app.use(express.static('public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/', (req, res) => {
  console.log(req.url)
  /* res.sendFile(__dirname + '/views/home.html') */
  res.render('home')
})

app.get('/about', (req, res) => {
  console.log(req.url)
  /* res.sendFile(__dirname + '/views/about.html') */
  res.render('about')
})

app.get('/works', (req, res) => {
  console.log(req.url)
  /* res.sendFile(__dirname + '/views/works.html') */
  res.render('works')
})

app.get('/photogallery', (req, res) => {
  console.log(req.url)
  /* res.sendFile(__dirname + '/views/photogallery.html') */
  res.render('photogallery')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})