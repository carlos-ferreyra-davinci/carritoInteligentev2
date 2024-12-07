import app from './app.js'
import {connectDB} from "./db.js"

connectDB();
app.listen(3977)
console.log('server on');