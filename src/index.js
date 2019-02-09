const handler = new Map()

function attachEventToDocument(event) {
    document.addEventListener(event, evt => {
        handler.get(event).forEach(fn => {
            fn(evt)
        })
    })
}

function addHandler(event, selector, cb) {
    handler.get(event).push(evt => {
        if (recursiveMatch(evt.target, selector)) {
            cb(evt)
        }
    })
}

export function onSelector(event, selector, cb) {
    if (!handler.has(event)) {
        handler.set(event, [])
        attachEventToDocument(event)
    }

    addHandler(event, selector, cb)
}

function recursiveMatch(el, selector) {
    // typeof can tell you 'string', 'number', 'boolean', 'object', 'undefined',
    //'symbol', 'function'
    if (typeof el.matches === 'function' && el.matches(selector)) {
        return true
    } else if (el.parentNode) {
        return recursiveMatch(el.parentNode, selector)
    } else {
        return false
    }
}
