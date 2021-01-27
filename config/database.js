const mongoose = require('mongoose')

mongoose.connect(
    'mongodb://localhost:27017/posts',
    { useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
)

const db = mongoose.connection

db.on('connected', function() {
    console.log(`MongoDb is firing like a champ at ${db.host}:${db.port}`)
})