//this should work, but doesn't. Unsure why. Isn't even invoked

defaultAddEventListener = Element.prototype.addEventListener;
Element.prototype.addEventListener = function (type, listener, options) {
    if(type === "wheel") {
        console.log("Skipping wheel event", listener);
    } else {
        defaultAddEventListener(type, listener, options);
    }
};

// // getEventListeners() works only in console
// chart = document.getElementById("fin-chartiq");
// listenerMap = getEventListeners(chart);
// listenerMap.wheel.forEach(function (object) {
//     chart.removeEventListener("wheel", object.listener)
// });


// defined too late to affect
// CIQ.ChartEngine.prototype.addDomEventListener = function (a, b, c) {
//     console.log("replace addDomEventListener", a, b, c)
// };
