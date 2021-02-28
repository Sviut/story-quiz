const express = require('express')

const PORT = 5454

const app = express()

app.listen(PORT, () => console.log(`Server start on ${PORT} port`))
