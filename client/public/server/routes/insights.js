const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  res.json({
    message: 'AI Insight API Working'
  })
})

module.exports = router
