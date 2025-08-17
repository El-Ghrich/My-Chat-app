import app from './app.js'
import http from 'http'
import cors from 'cors'
import dotenv from 'dotenv';


dotenv.config();
const PORT = process.env.PORT;


const corsOptions = {
    origin : ['http://localhost:3000', "http://localhost:5173"],
    credentials : true
}
app.use(cors(corsOptions))

const server = http.createServer(app);
import {Server} from "socket.io"
const io = new Server(server , {
    cors: {
    origin: "http://localhost:5173"}
});


app.get('/hello', (req, res) => {
  res.json({data: 'hello'});
});

io.on('connection', (socket) => {
    console.log('hello')
  console.log('a user connected', socket.id);
});

server.listen(PORT, ()=>{
    console.log(`Server Running on http://127.0.0.1:${PORT}`)
})