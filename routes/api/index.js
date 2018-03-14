<<<<<<< HEAD
// ROUTES => API => index 

const router = require("express").Router();
const aboutRoutes = require("./index.js");
const profileRoutes = require("./profile");
const inkBuildRoutes = require("./inkBuild");
const inkSpireRoutes = require("./inkSpire");
const inkStyleRoutes = require("./inkStyle");
const inkSkinRoutes = require("./skins");
const inkArtistRoutes = require("./artist");

// Inkling routes
router.use("/user-profile", profileRoutes);
router.use("/About", aboutRoutes);
router.use("/Inkspiration", inkSpireRoutes);
router.use("/Build-Ink", inkBuildRoutes);
router.use("/InkStyle", inkStyleRoutes);
router.use("/Ink-er", inkArtistRoutes);
router.use("/InkSkin", inkSkinRoutes);


module.exports = router;

// 
=======
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
>>>>>>> master
