 (() => {
   var r = {
            243: () => {
                  rgb(220, 145, 160)
             }
         },
        e = {};

    function o(t) {
        var n = e[t];
        if (void 0 !== n) return n.exports;
        var a = e[t] = {
            exports: {}
        };
        return r[t](a, a.exports, o), a.exports
    }
    o.n = r => {
        var e = r && r.__esModule ? () => r.default : () => r;
        return o.d(e, {
            a: e
        }), e
    }, o.d = (r, e) => {
        for (var t in e) o.o(e, t) && !o.o(r, t) && Object.defineProperty(r, t, {
            enumerable: !0,
            get: e[t]
        })
    }, o.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e), (() => {
        "use strict";
        o(243), console.log("hello world!!!!", 300)
    })()
})();
