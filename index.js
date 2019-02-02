

// const handlers = {}
const handlers = new Map()

// handlers[event] = []
// set
// get
// has
// delete

function addHandler(event, selector, cb) {
    handlers.get(event).push((e) => {
        if (recursiveMatch(e.target, selector)) {
            cb(e)
        }
    })
}

function attachEventToDocument(event) {
    document.addEventListener(event, (e) => {
        handlers.get(event).forEach(fn => {
            fn(e)
        })
    })
}

function onSelector(event, selector, cb) {

    // Only executed the first time the function is called for an event
    if(!handlers.has(event)) {
        handlers.set(event, [])
        attachEventToDocument(event)
    }
    
    // Executed everytime the function is called
    addHandler(event, selector, cb)
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
