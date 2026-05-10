const express = require('express');
const app = express();


const movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
    },
    {
        id: 2,
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        actors: ["Marlon Brando", "Al Pacino", "James Caan"]
    },
]
app.get('/api/movies', (req,res) => {
    const id = req.query.id;

    if (id) {
        const movie = movies.find((movie) => movie.id === parseInt(id));

        if (!movie) {
            return res.status(404).send("The movie with the given id is not found ");
        }

        return res.send(movie);
    }

    res.send(movies);
})

app.get('/', (req,res) => {
    res.send(movies);
})

app.get("/api/movies/:id", (req,res) => {
    const id = req.params.id;
    const movie = movies.find((movie) => movie.id === parseInt(id));
    if (!movie) {
        return res.status(404).send("The movie with the given id is not found ");
    }
    res.send(movie);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

