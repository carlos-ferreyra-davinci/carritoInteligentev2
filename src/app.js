import express, { application } from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
import clientRoutes from './routes/client.routes.js'
import productRoutes from './routes/product.routes.js'

//iniciando el servidor
const app = express();

// middleware para convertir los req body o que el back lo pueda entender con express
app.use(express.json())
app.use(cors())
app.use(cookieParser())

//utilizar las rutas
app.use("/api", authRoutes)
app.use(clientRoutes)
app.use(productRoutes)

export default app
