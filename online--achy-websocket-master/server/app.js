import express from "express"
import cors from "cors";
import {v4 as uuidv4} from "uuid"
import bcrypt from "bcrypt"
const app = express()
app.use(cors());
app.use(express.json())
 
app.post("/new_move", async (req, res)  => {
    console.log("RECIEVED MOVE ", req)
    res.json({
      message: "SUCESS"   
    })
})
app.get("/game_state", async (req, res)  => {
  console.log("RECIEVED MOVE ", req)
  res.json({
    message: "SUCESS"   
  })
})
app.listen(3001, () => {
    console.log("I work")
})