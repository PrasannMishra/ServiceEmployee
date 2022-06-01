const { createLogger, format, transports } = require("winston")
require("winston-daily-rotate-file")

const DailyRotateFile = new transports.DailyRotateFile({
    filename: "logs/server-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
    level: "info",
})
const errorFile = new transports.File({
    filename: "logs/error.log",
    level: "error",
})
const infoFile = new transports.File({
    filename: "logs/info.log",
    level: "info",
    format: format.combine(
        format.printf((i) =>
            i.level === "info" ? `${i.level}: ${i.timestamp} ${i.message}` : ""
        )
    ),
})
module.exports = createLogger({
    format: format.combine(
        format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        format.align(),
        format.printf((i) => `${i.level}: ${[i.timestamp]}: ${i.message}`)
    ),
    transports: [ infoFile , errorFile , DailyRotateFile ]
})