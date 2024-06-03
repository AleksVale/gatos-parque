"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston = require("winston");
require("winston-daily-rotate-file");
const transports = [
    new winston.transports.Console({
        format: winston.format.combine(winston.format.timestamp(), winston.format.colorize(), winston.format.printf(({ timestamp, level, message, context, trace }) => {
            return `${timestamp} [${context}] ${level}: ${message}${trace ? `\n${trace}` : ''}`;
        })),
    }),
    new winston.transports.DailyRotateFile({
        filename: 'logs/application-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    }),
];
exports.logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports,
});
//# sourceMappingURL=winston.config.js.map