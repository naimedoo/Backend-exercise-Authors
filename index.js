const express = require('express');
const app = express();

var Authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

app.listen(3000, () => {
    console.log("the server is listening on port:" + 3000)
})
/********** Exercice 1 *************/
app.get("/",(req,res,next) => {
    console.log("req", req)
    console.log("res", res)
    res.send("authors API")
})

/********* Exercice 2 *************/
app.get("/Authors/1/", (req,res,next) => {
res.send('Laurence Nowell, UK')
})
app.get("/Authors/2/", (req,res,next) => {
    res.send('William Shakespeare, UK')
    })
app.get("/Authors/3/", (req,res,next) => {
        res.send('Charles Dickens, US')
})
app.get("/Authors/4/", (req,res,next) => {
    res.send('Oscar Wilde, UK')
    })

/********Exercice 3 **************/
app.get("/Authors/:id/books", (req,res,next)=> {
    let params =  req.params.id;
    // console.log('res',params)
    for(let i = 1; i <= Authors.length; i++) {
        if(params == i) {
            return res.send(Authors[i].name + " " + Authors[i].books)
        }
    }
   
 })

/*******Exercice 4 ************/

 app.get("/Authors/:id",(req,res,next)=> {
     let name = "";
     let nationality = "";
     res.json({
       name:Authors[0].name,
       nationality: Authors[0].nationality,
      
     })
 })

 app.get('/json/Authors/:id/books',(req,res,next)=> {
     console.log("req ====>", req)
     res.json({
        books:Authors[0].books
     })
 })