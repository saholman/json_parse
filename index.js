module.exports = function(param, callback) {
    try {
        param = JSON.parse(param)
        return param;
    } catch(err) {
        console.log("JSON.parse error: " + err.message + ", parameter=" + param)
    }
}
