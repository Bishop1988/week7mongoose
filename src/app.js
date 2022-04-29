require("./db/connection")
const { default: mongoose } = require("mongoose")
const yargs = require("yargs")
const { addMovie, deleteMovie, listMovies, updateMovie, searchMovie } = require("./movie/methods")
const { addShow, listShows, updateShow, deleteShow, searchShow } = require("./tvshow/methods")

const app = async (yargsObj) => {
    try {
        if (yargsObj.addMovie) {
            // add movie function that takes yargsObj terminal input
            await addMovie({title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year})
            console.log(`Successfully added ${yargsObj.title}`)
        } else if (yargsObj.listMovies) {
            // list movies from database
            await listMovies()
        } else if (yargsObj.updateMovie) {
            // update movies with filterObj and updateObj
            await updateMovie(yargsObj)
            console.log(`Record updated! successfully changed ${yargsObj.title} to ${yargsObj.newTitle}`)
        } else if (yargsObj.deleteMovie) {
            // delete movie with filterObj
            await deleteMovie({title: yargsObj.title})
            console.log(`Successfully deleted ${yargsObj.title}`)
        } else if (yargsObj.searchMovie) {
            await searchMovie({title: yargsObj.title})
        } else if (yargsObj.addShow) {
            await addShow({title: yargsObj.title, seasons: yargsObj.seasons})
            console.log(`Successfully added ${yargsObj.title}`)
        } else if (yargsObj.listShows) {
            await listShows()
        } else if (yargsObj.updateShow) {
            await updateShow(yargsObj)
            console.log(`Record updated! successfully changed ${yargsObj.title} to ${yargsObj.newTitle}`)
        } else if (yargsObj.deleteShow) {
            await deleteShow({title: yargsObj.title})
            console.log(`Successfully deleted ${yargsObj.title}`)
        } else if (yargsObj.searchShow) {
            await searchShow({title: yargsObj.title})
        } else {
            console.log("Inccorect command")
        }
        await mongoose.disconnect()
    } catch (err) {
        console.log(err)
        await mongoose.disconnect()
    }
}

app(yargs.argv)