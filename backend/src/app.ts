import 'reflect-metadata'
import 'express-async-errors'
import createConnection from './database'
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import path from 'path'
import { AppError } from './errors/AppError'
import { router } from './routes'

createConnection()
const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

// app.use(express.static(path.join(__dirname, '../frontend/out')))

// app.get('/', (request: Request, response: Response) => {
//     response.sendFile(path.join(__dirname, '../frontend/out/index.html'))
// })

app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: 'Error',
        message: `Internal server Error ${err.message}`
    })
})

export { app }
