

// const handlers = {}
const handlers = new Map()

// handlers[event] = []
// set
// get
// has
// delete

function onSelector(event, selector, cb) {

    // Only executed the first time the function is called for an event
    if(!handlers.has(event)) {
        console.log('event: ', event)
        handlers.set(event, [])

        document.addEventListener(event, (e) => {

            handlers.get(event).forEach(fn => {
                console.log("inside selector: ", selector)
                // if (recursiveMatch(e.target, selector)) {
                    fn(e)
                // }
            });

            // if (recursiveMatch(e.target, selector)) {
            //     cb(e)
            // } 
        })
    }
    
    // Executed everytime the function is called
    handlers.get(event).push((e) => {
        console.log("outside selector: ", selector)
        if (recursiveMatch(e.target, selector)) {
            cb(e)
        }
    })
}

// element,string -> boolean 
function recursiveMatch(el, selector) {
    // typeof can tell you 'string', 'number', 'boolean', 'object', 'undefined', 'symbol', 'function'
    if(typeof el.matches === 'function' && el.matches(selector)) {
        return true
    } else if (el.parentNode) {
        return recursiveMatch(el.parentNode, selector)
    } else {
        return false
    }
} 
