define("hellospm/hello/0.0.1/handle-text", ["$", "hellospm/util/0.0.1/util"], function(require, exports, module) {
    var $ = require('$')
    var random = require('hellospm/util/0.0.1/util').random
    
    function handleText(text){
        var min = random(30,70)
        var max = random(50,120)
        var rt = ''
        for(var i = 0, len = text.length; i < len; i++){
            rt += '<span style="font-size:' + random(min, max) + 'px;">' + text[i] + '</span>'
        }
        return rt
    }
    
    module.exports = handleText
})
