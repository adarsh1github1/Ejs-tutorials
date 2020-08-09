// templating -- EJS(embeded javascript templating)

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs'); // this line should be below ------  const app = express();

app.get("/", function(req, res){
    
    var today = new Date();
    var current_day = today.getDay();
    var day = "";
    switch (current_day){
        case 1:
            day = "Monday"; break;
        case 2:
            day = "Tuesday"; break;
        case 3:
            day = "Wednesday"; break;
        case 4:
            day = "Thursday"; break;
        case 5:
            day = "Friday"; break;
        case 6:
            day = "Saturday"; break;
        case 0:
            day = "Sunday"; break;
        default:
            console.log("Error how did this" + current_day + "occur");
    }
    res.render("list", {kindofday:day});
    // ejs template is <%= variable_name%>
    // key has to match with exactly the name used in ejs file
        // this line says we render the page  list.ejs and we pass the day to the rjs file 
    // here we have used res.render which uses the view engine created above to render a particular page..... that page would be an filename.ejs page.
    //(This assumes a views directory containing an index.ejs page.) 
    // if we want to make different responses to different requests then we will have to make several html pages so we need an aplternative .... this alternative is template...here the mosof the code is same...

    
});



app.listen(3000, function(){
    console.log("server is running on server 3000");
});