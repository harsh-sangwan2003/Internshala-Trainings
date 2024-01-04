const router = require('express').Router();

router.get("/test/:param", (req, res) => {

    const paramValue = req.params.param;
    res.status(200).send(paramValue);
})

module.exports = router;