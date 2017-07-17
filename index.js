module.exports = function(param) {
    try {
        param = JSON.parse(param)
        return param;
    } catch(err) {
        throw("JSON.parse error: " + err.message + ", parameter=" + param + err.stack)
    }
}
