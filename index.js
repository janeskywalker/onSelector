

// function onSelector(event, selector, cb) {
//     document.addEventListener(event, (e) => {
//         if (recursiveMatch(e.target, selector)) {
//             cb (e)
//         } 
//     })
// }

// // element,string -> boolean 
// function recursiveMatch(el, selector) {
//     // typeof can tell you 'string', 'number', 'boolean', 'object', 'undefined', 'symbol', 'function'
//     if(typeof el.matches === 'function' && el.matches(selector)) {
//         return true
//     } else if (el.parentNode) {
//         return recursiveMatch(el.parentNode, selector)
//     } else {
//         return false
//     }
// } 





function onSelector(event, selector, cb) {
    document.addEventListener(event, (evt) => {
        // check the evt.target first
        if(recursiveMatch(evt.target,selector)) {
            cb(evt)
        } 
    })
}

function recursiveMatch(element, selector) {
    if( typeof element.matches === 'function' && element.matches(selector)) {
        return true
        // check parentNode is not null
    } else if(element.parentNode) {
        return recursiveMatch(element.parentNode, selector)
    } else {
        return false
    }

    
}