const logger = require("../utils/logger")

const getNotification = async (req, res,next) => {
    try {
        let mockJson = [
            {
                id: 1,
                name: 'Ashwin',
                notificationType: 'Help'
            },
            {
                id: 2,
                name: 'Prasann',
                notificationType: 'Action Needed'
            },
            {
                id: 3,
                name: 'Raju',
                notificationType: 'Support'
            },
        ]
         res.json(mockJson)
    } catch (err) {
        throw err
    }
}
module.exports = { getNotification }