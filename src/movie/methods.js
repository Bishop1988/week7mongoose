const Movie = require("./model")

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj)
    } catch (err) {
        console.log(err)
    }
}

exports.listMovies = async () => {
    try {
        const movieList = await Movie.find({})
        console.log(movieList)
    } catch (err) {
        console.log(err)
    }
}

exports.updateMovie = async (movieObj) => {
    try {
        await Movie.updateOne(
            { title: movieObj.title },
            { title: movieObj.newTitle, actor: movieObj.newActor, year: movieObj.newYear }
        ) 
    } catch (err) {
        console.log(err)
    }
}

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.deleteOne(movieObj)
    } catch (err) {
        console.log(err)
    }
}

exports.searchMovie = async (movieObj) => {
    try {
        const result = await Movie.findOne(movieObj)
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}