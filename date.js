
//module.exports = "hello world"; // here we are exporting the string "hello world" to some other page

//module.exports = getDate; // we have to be really carefull where we give our paranthesis , because wherever we put it the finction will run there, we dont want to run here we want to run it in app.js 


// created anonymous finctions and gave it variable name
// we can also use the following instead of module.exports.getDate
exports.getDate = function (){

    const today = new Date();
    const options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    const day = today.toLocaleDateString("en-US", options)   //en -us is for english and options to format to our preferance
    return day;   
}

// what if we want our date module to do more than one thing ..?
// we know module.export is an object and it has properties .. we could tap into its properties

exports.getDay =  function (){

    const today = new Date();
    const options = {
        weekday : "long",
    };
    return today.toLocaleDateString("en-US", options)   //en -us is for english and options to format to our preferance
       
}
