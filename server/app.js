import express from "express"
import cors from "cors";
import Game from "./game.js"
// import Grid from "./grid/grid.js"
// import {v4 as uuidv4} from "uuid"
// import bcrypt from "bcrypt"
const app = express()
app.use(cors());
app.use(express.json())


var beginningState = ["r","n","b","k","q","b","n","r","p","p","p","p","p","p","p","p","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","P","P","P","P","P","P","P","P","R","N","B","K","Q","B","N","R"]
var game = null //= new Game(beginningState, 600)

app.post("/create_game", async (req, res)  => {
    console.log("createing_game ", req)
    game = new Game(beginningState, 600)
    res.json({
      message: "SUCESS",
      game: game
    })
})


app.post("/new_move", async (req, res)  => {
    console.log("RECIEVED MOVE ", req)
    res.json({
      message: "SUCESS"   
    })
})
app.get("/game_state", async (req, res)  => {
  console.log("RECIEVED MOVE ", req)
  res.json({
    message: game 
  })
})


app.listen(3001, () => {
    console.log("I work")
})