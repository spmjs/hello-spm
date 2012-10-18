define("hello/0.0.1/handle-text-debug", ["$-debug", "util/0.0.1/util-debug"], function(require, exports, module) {
    var $ = require('$-debug')
    var random = require('util/0.0.1/util-debug').random
    
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

define("hello/0.0.1/hello-debug", ["./handle-text-debug", "$-debug", "util/0.0.1/util-debug"], function(require, exports, module) {
    var $ = require('$-debug')
    var random = require('util/0.0.1/util-debug').random
    var handleText= require('./handle-text-debug')
    
    function Hello(){
        this.render()
        this.bindAction()
        seajs.log('new Hello() called.')
    }
    
    Hello.prototype.render = function(){
        this.el = $('<div style="position:fixed;' 
            + 'left:' + random(0,70) + '%;'
            + 'top:' + random(10,80)+ '%;">'
            + handleText('Hello SPM !')
            + '</div>').appendTo('body')
    }
    
    Hello.prototype.bindAction = function(){
        var el = this.el
        setTimeout(function(){ el.fadeOut() }, random(500,5000))
    }
    
    module.exports = Hello
})