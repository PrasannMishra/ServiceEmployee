const express = require('express')
const router = express.Router()
const { getNotification } = require('../controller/notification')

router.get("/", async (req, res) => {
    try {
        await getNotification(req, res)
    } catch (e) {
        console.log(e)
        logger.error(e)
        res.status(500).send(e.message)
    }
})
module.exports = router