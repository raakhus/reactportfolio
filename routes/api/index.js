const router = require("express").Router();
const contactRoutes = require("./contact");


router.use("/contacts1", contactRoutes);

module.exports = router;
