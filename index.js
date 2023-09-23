import express from "express"
import open from "open"
import { fileURLToPath } from "url"
import { dirname } from "path"

const app = express()

const file = fileURLToPath(import.meta.url)
const __dirname = dirname(file)

app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

app.post("/word", (req, res) => {
  const word = req.body.word.trim().toLowerCase()
  open("http://wisdomlib.org/definition/" + word + "#sanskrit")
})

const listener = app.listen(3000, () => {
  console.log("Your app is listening on port " + listener.address().port)
})
