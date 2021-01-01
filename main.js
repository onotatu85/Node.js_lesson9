const port = 3000,

express = require("express"),

homeController = require("./controllers/homeController"),

app = express();


app.use(
  express.urlencoded({
    extended:false
  })
);

app.use(express.json());

app.use((req,res,next) => {
  console.log(`request made to: ${req,url}`);
  next();
});

app.post("/",(req,res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
})

app.get("/item/:vegetable",homeController.sendReqParam);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});