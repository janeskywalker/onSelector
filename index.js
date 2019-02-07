
const handler = new Map

// function onSelector(event, selector, cb) {
//     document.addEventListener(event, (e) => {
//         if (recursiveMatch(e.target, selector)) {
//             cb (e)
//         } 
//     })
// }



function onSelector(event, selector, cb) {
    
    if(!handler.has(event)) {
        handler.set(event, [])

        document.addEventListener(event, (evt) => {
            //debugger
            //if(recursiveMatch(evt.target, selector)) {
            handler.get(event).forEach((fn) => {
                fn(evt)
            })
            //}
        }) 
    }

    handler.get(event).push((evt) => {
         
        if(recursiveMatch(evt.target, selector)) {
            cb(evt)
        }
    })
}




// function onSelector(event, selector, cb) {

//     console.log('cb:', cb)
//     // add the event for the fist time, set the key 
//     // addEventListener to doc, run all fns 
//     if(!handler.has(event)) {
//         handler.set(event, [])

//         // console.log('adding event:', event)
//         // console.log('handler:', handler)
        
//         // triggered when event fired
//         // fn is the new cb that calls old cb
//         document.addEventListener(event, (evt) => {
//             debugger

//             handler.get(event).forEach((fn) => {
//                 //console.log('fn:', fn)
//                 fn(evt)
//             })
//         }) 

//     }

//     // if event already exist, push a new cb that 
//     // calls the old cb
//     handler.get(event).push((evt) => {

//         //console.log('handler:', handler)
//         // console.log('added event:', event)

//         // console.log('evt.target:', evt.target)
//         // console.log('selector:', selector)
         
//         if(recursiveMatch(evt.target, selector)) {
//             console.log('cb:', cb)
//             cb(evt)
//         }
//     })

//     //console.log('handler:', handler)
// }









// element,string -> boolean 
function recursiveMatch(el, selector) {
    // typeof can tell you 'string', 'number', 'boolean', 'object', 'undefined', 
    //'symbol', 'function'
    if(typeof el.matches === 'function' && el.matches(selector)) {
        return true
    } else if (el.parentNode) {
        return recursiveMatch(el.parentNode, selector)
    } else {
        return false
    }
} 





// function onSelector(event, selector, cb) {
//     document.addEventListener(event, (evt) => {
//         // check the evt.target first
//         if(recursiveMatch(evt.target,selector)) {
//             cb(evt)
//         } 
//     })
// }

// function recursiveMatch(element, selector) {
//     if( typeof element.matches === 'function' && element.matches(selector)) {
//         return true
//         // check parentNode is not null
//     } else if(element.parentNode) {
//         return recursiveMatch(element.parentNode, selector)
//     } else {
//         return false
//     }
// }