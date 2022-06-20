// penginstalan express framework ke node module
const { request, response } = require('express')
const express = require ('express')
// alternatif lain untuk penginstalan express = import express from 'express'

const app = express()
const port = 8080

// setting view engine
app.set(`view engine`, `hbs`)

// untuk mengakses file dalam folder public
app.use(`/public`, express.static(__dirname + `/public`))

app.use(express.urlencoded({ extended: false }));

// fungsi menjalankan server untuk mengetahui apakah server berjalan atau tidak
app.listen(port, function(request, response){
    console.log(`server running on port ${port}`);
})

// arrow function alternatif untuk statement function di atas
// // app.listen(port, () => {
//     console.log(`server running on port ${port}`);
// })

// dibawah ini untuk test request untuk ditampilkan dari server ke browser
// app.get(`/`, (request,response) => {
//     response.send("test word")
// })

app.get(`/`,(request,response) => {
    response.render("index")
})

app.get(`/contact-me`,(request,response) => {
    response.render("contact-me")
})

app.get(`/add-project`,(request,response) => {
    response.render("add-project")
})

app.post("/add-project",(request,response) => {
    console.log(request.body);
});

app.get("/project-detail/:name",(request,response) => {
    let name = request.params.name;
    response.render("project-detail", {
        project: {
            name,
            title: "Title",
            duration: "01 January 2022 - 01 December 2022",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita corporis corrupti ullam, accusantium adipisci harum repellendus sint perspiciatis temporibus ipsa et consequatur sed, itaque autem? Id excepturi voluptatem eligendi accusamus?",
        },
    });
});