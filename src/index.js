import app from './app.js'
import {connectDB} from "./db.js"

connectDB();
app.listen(3100)
console.log('server on');