const superagent = require('superagent')
const expect = require('expect.js');
const { boot, shutdown, port } = require('../app')

describe('server', () => {
  before(() => {
    boot()
  })

  describe('homepage', () => {
    it('should respond to GET', (done) => {
      superagent
        .get(`http://localhost:${port}`)
        .end((err, res) => {
          expect(res.status).to.equal(200)
          done()
        })
    })
  })

  after(() => {
    shutdown()
  })
})
