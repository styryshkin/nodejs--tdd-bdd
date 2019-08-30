const express = require('express')
const http = require('http')

const app = express()

app.set('port', process.env.PORT || 3000)

app.all('*', (req, res) => {
  res.send('respond with a resource');
})

const server = http.createServer(app)
const boot = () => {
  server.listen(app.get('port'), () => {
    console.info(`Express server listening on port ${app.get('port')}`)
  })
}

const shutdown = () => {
  server.close()
}

if (require.main === module) {
  boot()
} else {
  console.info('Running app as a module')
  exports.boot = boot
  exports.shutdown = shutdown
  exports.port = app.get('port');
}
