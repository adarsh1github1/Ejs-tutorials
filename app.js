// templating -- EJS(embeded javascript templating)

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js"); // we required a module date.js locally 

//console.log(date()); // we are printing whatever we had exported from the date.js page , here we have put the () because the date.js is exporting a function getdate so output will be today's date


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const items = [];
const workItems = [];
app.set('view engine', 'ejs'); // this line should be below ------  const app = express();

app.get("/", function(req, res){
    
    let day = date.getDate(); // gets date from the date module we could also get the day
    // let day = date.getDay();

    res.render("list", {listTitle:day, newListItem:items});
    // ejs template is <%= variable_name%>
    // key has to match with exactly the name used in ejs file
        // this line says we render the page  list.ejs and we pass the day to the rjs file 
    // here we have used res.render which uses the view engine created above to render a particular page..... that page would be an filename.ejs page.
    //(This assumes a views directory containing an index.ejs page.) 
    // if we want to make different responses to different requests then we will have to make several html pages so we need an aplternative .... this alternative is template...here the mosof the code is same...

    
});

app.post("/", function(req, res){
    //console.log(req.body);
    const item = req.body.newItem;
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
    // we add the newLsitItem in app.render in the app.get after saving the data from the website we redirect to the home website where the newListItem gets sent
});

app.get("/work" , function(req , res){
    res.render("list" , {listTitle:"Work" , newListItem : workItems});
})

app.post("/work" , function(req , res){

    
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(3000, function(){
    console.log("server is running on server 3000");
});