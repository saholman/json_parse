module.exports = function(param, callback) {
    try {
        param = JSON.parse(param)
        return param;
    } catch(err) {
        throw("JSON.parse error: " + err.message + ", parameter=" + param)
    }
}
