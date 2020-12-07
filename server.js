const express = require("express");
const expresshandle = require("express-handlebars");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", expresshandle({ defaultLayout: "main",}));
app.set("view engine", "handlebars");

app.get("/", (req,res)=>{
    res.render("index");
});

app.get("/api/config", (req, res)=>{
    res.json({
        success: true,
    });
});

app.post("/api/config", (req, res)=>{
    console.log(req.body);
});

app.listen(PORT, ()=>{
    console.log(`running on http://localhost:${PORT}`);
});