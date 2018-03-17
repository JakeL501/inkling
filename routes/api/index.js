const router = require('express').Router()
// const authroute = require('./authroute')
const inkRequestRoute = require('./inkRequestRoute')
const skinProfileRoute = require('./skinProfileRoute')
const inkerSampleRoute = require('./inkerSampleRoute')
const inkerprofileRoute = require('./inkerProfileRoute')



// router.use('/authroute', authroute)
router.use('/inkRequestRoute', inkRequestRoute)
router.use('/skinProfileRoute', skinProfileRoute)
router.use('/inkerSampleRoute', inkerSampleRoute)
router.use('/inkerprofileRoute', inkerprofileRoute)


module.exports = router
