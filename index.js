const express = require("express")
const app = express()
const path = require("path")

// app.use(express.static(path.resolve(__dirname, "src")))
app.use(express.static("./src"))

// app.get("/p", (req, res) => {
//   console.log("req.url", req.url)
//   console.log("req.path", path.resolve(__dirname, "./src/index.html"))
//   res.sendFile(path.resolve(__dirname, "./src/index.html"))
// })

app.get("*", (req, res) => {
  const url = req.url
  //   res.status(404).sendFile(path.resolve(__dirname, "./src/errorPage.html"));
  res.status(404).send(
    `<div>
      <h2>no path match ${url}</h2>
      <button className="btn">
        <a href="/">back home</a>
      </button>
    </div>`
  )
})

app.listen(5002, () => console.log("server listening at port 5002..."))
