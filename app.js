// templating -- EJS(embeded javascript templating)

const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
var items = [];
app.set('view engine', 'ejs'); // this line should be below ------  const app = express();

app.get("/", function(req, res){
    
    var today = new Date();
    var options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    var day = today.toLocaleDateString("en-US", options)   //en -us is for english and options to format to our preferance
    res.render("list", {kindofday:day, newListItem:items});
    // ejs template is <%= variable_name%>
    // key has to match with exactly the name used in ejs file
        // this line says we render the page  list.ejs and we pass the day to the rjs file 
    // here we have used res.render which uses the view engine created above to render a particular page..... that page would be an filename.ejs page.
    //(This assumes a views directory containing an index.ejs page.) 
    // if we want to make different responses to different requests then we will have to make several html pages so we need an aplternative .... this alternative is template...here the mosof the code is same...

    
});

app.post("/", function(req, res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");// we add the newLsitItem in app.render in the app.get after saving the data from the website we redirect to the home website where the newListItem gets sent
});


app.listen(3000, function(){
    console.log("server is running on server 3000");
});