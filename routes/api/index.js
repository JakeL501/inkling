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