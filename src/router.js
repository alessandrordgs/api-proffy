const express = require('express')

const ProffyController = require('./controllers/proffyControllers')
const router = express.Router()

router.get('/proffy', ProffyController.listProffy )
router.post('/proffy', ProffyController.createProffy)
router.get('/proffy/:id', ProffyController.proffy)
module.exports = router