import express from 'express'
import bootstrap from './Src/index.router.js'
const app = express()
const port = process.env.PORT || 5000

import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({path : path.join(__dirname , './Config/.env')})

bootstrap(app,express)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))