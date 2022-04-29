const Tvshow = require("./model")

exports.addShow = async (tvshowObj) => {
    try {
        await Tvshow.create(tvshowObj)
    } catch (err) {
        console.log(err)
    }
}

exports.listShows = async () => {
    try {
        const tvshowList = await Tvshow.find({})
        console.log(tvshowList)
    } catch (err) {
        console.log(err)
    }
}

exports.updateShow = async (tvshowObj) => {
    try {
        await Tvshow.updateOne(
            {title: tvshowObj.title},
            {title: tvshowObj.newTitle, seasons: tvshowObj.newSeasons}
        )
    } catch (err) {
        console.log(err)
    }
}

exports.deleteShow = async (tvshowObj) => {
    try {
        await Tvshow.deleteOne(tvshowObj)
    } catch (err) {
        console.log(err)
    }
}

exports.searchShow = async (tvshowObj) => {
    try {
        const result = await Tvshow.findOne(tvshowObj)
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}