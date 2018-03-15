const router = require('express').Router()
const authroute = require('./authroute')
const inkRequestRoute = require('./inkRequestRoute')
const skinProfileRoute = require('./skinProfileRoute')
const inkerSampleRoute = require('./inkerSampleRoute')
const inkerProfileRoute = require('./inkerProfileRoute')
// const xxxx = require('./xxxx')
// const xxxx = require('./xxxx')
// const xxxx = require('./xxxx')


router.use('/authroute', authroute)
router.use('/inkRequestRoute', inkRequestRoute)
router.use('/skinProfileRoute', skinProfileRoute)
router.use('/inkerSampleRoute', inkerSampleRoute)
router.use('/inkerProfileRoute', inkerProfileRoute)
// router.use('/xxxx', xxxx)
// router.use('/xxxx', xxxx)
// router.use('/xxxx', xxxx)

module.exports = router
