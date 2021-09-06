module.exports = function(req, res, next){
    console.warn('current route is ', req.originalUrl)
next()
}