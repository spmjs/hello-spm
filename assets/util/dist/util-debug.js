define("hellospm/util/0.0.1/util-debug", [], function(require, exports) {
    exports.random = function(min, max){
        return min + Math.round(Math.random() * (max - min))
    }
})